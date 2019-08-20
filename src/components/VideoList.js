import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  render() {
    const { videos } = this.props;

    // simple error handling for loading

    if (videos.length === 0) {
      return <div>Loading</div>;
    }

    return (
      <div className="ui relaxed divided list">
        {videos.map((video, index) => {
          return <VideoItem key={index} video={video} />;
        })}
      </div>
    );
  }
}

export default VideoList;
