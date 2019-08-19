import { INPUT_CHANGE } from "./../actions/types";

export default (state = "", action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
