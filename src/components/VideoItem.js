import React from "react";
import { connect } from "react-redux";
import { selectVideo } from "./../actions/index";
import unescapeHTML from "../utility/htmlEntityFunctions";

const VideoItem = ({ video, selectVideo }) => {
  return (
    <div
      onClick={() => selectVideo(video)}
      className="item"
      style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        fontWeight: 600
      }}
    >
      <img
        alt={unescapeHTML(video.snippet.title)}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        style={{ maxWidth: "180px", paddingRight: "7px" }}
      />
      <div className="content">
        <div className="header">{unescapeHTML(video.snippet.title)}</div>
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
