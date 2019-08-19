import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "./../actions/index";
import "./VideoItem.css";

const VideoItem = ({ selectedVideo }) => {
  return (
    // <div onClick={() => onVideoSelect(video)} className="video-item item">
    <div
      onClick={async () => await selectVideo(selectedVideo)}
      className="video-item item"
    >
      <img
        alt={selectedVideo.snippet.title}
        className="ui image"
        src={selectedVideo.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{selectedVideo.snippet.title}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedVideo: state.selectedVideo };
};

export default connect(
  mapStateToProps,
  { selectVideo }
)(VideoItem);
