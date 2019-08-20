import React, { Component } from "react";
import { connect } from "react-redux";
import { searchAndSelectFirstVideo } from "../actions";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  componentDidMount() {
    this.props.searchAndSelectFirstVideo("redux");
  }

  render() {
    const { selectedVideo, videos } = this.props;

    return (
      <div className="ui container">
        <div className="ui sizer vertical segment">
          <div className="ui huge header">
            <i className="play icon" style={{ color: "#ff0000" }} />
            YouTubeViewer
          </div>
        </div>
        <SearchBar />
        <div className="ui grid">
          <div className="ui row">
            <div
              className="sixteen wide mobile sixteen wide tablet eleven wide computer column"
              style={{ marginBottom: "10px" }}
            >
              <VideoDetail
                video={selectedVideo}
                style={{ marginBottom: "10px" }}
              />
            </div>
            <div className="sixteen wide mobile sixteen wide tablet five wide computer column">
              <VideoList videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos, selectedVideo: state.selectedVideo };
};

export default connect(
  mapStateToProps,
  { searchAndSelectFirstVideo }
)(App);
