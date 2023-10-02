import { expect, test } from "vitest";
import text, { textChanged } from "./text.slice";
import { taskAdded } from "./actions";

test("it change the input text", () => {
  // given
  const stateBefore = "Any text";
  const action = textChanged("Some other text");
  const stateAfter = "Some other text";

  // when
  const state = text(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});

test("it change the input text", () => {
  // given
  const stateBefore = "Any text";
  const action = taskAdded("Some other text");
  const stateAfter = "";

  // when
  const state = text(stateBefore, action);

  // then
  expect(state).toStrictEqual(stateAfter);
});
