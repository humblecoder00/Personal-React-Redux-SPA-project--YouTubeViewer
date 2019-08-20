import React from "react";
import unescapeHTML from "../utility/htmlEntityFunctions";

const VideoDetail = ({ video }) => {
  // simple error handling for loading

  if (Object.entries(video).length === 0) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{unescapeHTML(video.snippet.title)}</h4>
        <p>{unescapeHTML(video.snippet.description)}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
