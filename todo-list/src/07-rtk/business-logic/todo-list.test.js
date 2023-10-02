import { expect, test } from "vitest";
import todoList, {
  taskAdded,
  taskDeleted,
  taskToggled,
  textChanged,
} from "./todo-list.slice";

test("it change the input text", () => {
  // given
  const stateBefore = {
    text: "Any text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = textChanged("Some other text");
  const stateAfter = {
    text: "Some other text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };

  // when
  const state = todoList(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
  expect(state).not.toBe(stateBefore);
  expect(state.tasks).toBe(stateBefore.tasks);
});

test("it should add a new task given the text and it should also empty the text input", () => {
  // given
  const stateBefore = {
    text: "Any text",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = taskAdded("New task");
  const stateAfter = {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
      { id: 4, text: "New task" },
    ],
  };

  // when
  const state = todoList(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it should toggle the 'completed' property on a task given its id", () => {
  // given
  const stateBefore = {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = taskToggled(2);
  const stateAfter = {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  // when
  const state = todoList(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
  expect(state).not.toBe(stateBefore);
  expect(state.text).toBe(stateBefore.text);
});

test("it should delete a task given its id", () => {
  // given
  const stateBefore = {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 2, text: "Look for a job", completed: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const action = taskDeleted(2);
  const stateAfter = {
    text: "",
    tasks: [
      { id: 1, text: "Learn React", completed: true },
      { id: 3, text: "Forget everything" },
    ],
  };

  // when
  const state = todoList(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});
