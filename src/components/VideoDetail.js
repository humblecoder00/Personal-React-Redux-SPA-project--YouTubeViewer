import React from "react";
import { connect } from "react-redux";

const VideoDetail = ({ selectedVideo }) => {
  // simple error handling for null initialization

  // if (!selectedVideo) {
  //   return <div>Loading...</div>;
  // }

  // const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  if (!selectedVideo) {
    return console.log("it is loading..");
  }

  return (
    <div>
      <div className="ui embed">
        {/* <iframe title="video player" src={videoSrc} /> */}
      </div>
      <div className="ui segment">
        {/* <h4 className="ui header">{selectedVideo.snippet.title}</h4>
        <p>{selectedVideo.snippet.description}</p> */}
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   console.log(ownProps);
//   return { selectedVideo: ownProps.selectedVideo };
// };

// export default connect(mapStateToProps)(VideoDetail);

export default VideoDetail;
