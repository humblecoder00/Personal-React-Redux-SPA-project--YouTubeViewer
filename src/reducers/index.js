import { combineReducers } from "redux";
import videosReducer from "./videosReducer";
import selectedVideoReducer from "./selectedVideoReducer";
import inputReducer from "./inputReducer";

export default combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer,
  searchTerm: inputReducer
});
