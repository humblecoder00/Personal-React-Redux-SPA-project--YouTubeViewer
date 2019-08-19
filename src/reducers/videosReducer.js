import { SEARCH_VIDEO } from "./../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_VIDEO:
      return action.payload;
    default:
      return state;
  }
};
