import { SELECT_VIDEO, SEARCH_VIDEO, INPUT_CHANGE } from "./types";
import { getYoutubeData } from "../apis/youtube";

export const onInputChange = input => {
  return {
    type: INPUT_CHANGE,
    payload: input
  };
};

export const selectVideo = video => {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};

export const searchVideo = term => async dispatch => {
  const response = await getYoutubeData(term);
  dispatch({ type: SEARCH_VIDEO, payload: response.data.items });
};

export const searchAndSelectFirstVideo = term => async (dispatch, getState) => {
  // Call the searchVideo and dispatch it:
  await dispatch(searchVideo(term));

  // Got the list of fetched videos from Redux store:
  const selectedVideo = getState().videos[0];

  // Call the selectVideo with first video of the array as an argument and dispatch it:
  dispatch(selectVideo(selectedVideo));
};
