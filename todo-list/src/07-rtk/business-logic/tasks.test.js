import { expect, test } from "vitest";
import { taskAdded } from "./actions";
import tasks, { taskDeleted, taskToggled } from "./tasks.slice";

test("it should add a new task given the text and it should also empty the text input", () => {
  // given
  const stateBefore = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = taskAdded("New task");
  const stateAfter = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
    { id: 4, text: "New task" },
  ];

  // when
  const state = tasks(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it should toggle the 'completed' property on a task given its id", () => {
  // given
  const stateBefore = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = taskToggled(2);
  const stateAfter = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  // when
  const state = tasks(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
  expect(state).not.toBe(stateBefore);
  expect(state.text).toBe(stateBefore.text);
});

test("it should delete a task given its id", () => {
  // given
  const stateBefore = [
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Look for a job", completed: false },
    { id: 3, text: "Forget everything" },
  ];
  const action = taskDeleted(2);
  const stateAfter = [
    { id: 1, text: "Learn React", completed: true },
    { id: 3, text: "Forget everything" },
  ];

  // when
  const state = tasks(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});
