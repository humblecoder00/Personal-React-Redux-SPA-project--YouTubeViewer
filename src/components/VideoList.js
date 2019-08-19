import React, { Component } from "react";
import VideoItem from "./VideoItem";

class VideoList extends Component {
  // renderedList = videos.map(video => {
  //   return (
  //     <VideoItem
  //       key={video.id.videoId}
  //       onVideoSelect={onVideoSelect}
  //       video={video}
  //     />
  //   );
  // });

  render() {
    console.log(this.props);
    // return <div className="ui relaxed divided list">{renderedList}</div>;
    return <div className="ui relaxed divided list">VideoList</div>;
  }
}

export default VideoList;

// const VideoList = ({ videos, onVideoSelect }) => {
//   const renderedList = videos.map(video => {
//     return (
//       <VideoItem
//         key={video.id.videoId}
//         onVideoSelect={onVideoSelect}
//         video={video}
//       />
//     );
//   });

//   return <div className="ui relaxed divided list">{renderedList}</div>;
// };
