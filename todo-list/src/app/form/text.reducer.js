// action type
const TEXT_CHANGED = "text/textChanged";

// action creator
export const textChanged = (text) => ({ type: TEXT_CHANGED, payload: text });

// reducer

export default function text(state = "", action) {
  switch (action.type) {
    case TEXT_CHANGED:
      return action.payload;

    default:
      return state;
  }
}
