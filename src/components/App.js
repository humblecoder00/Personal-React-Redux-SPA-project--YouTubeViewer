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

  // onTermSubmit = async term => {
  //   // const response = await getYoutubeData(term);
  //   // this.setState({
  //   //   videos: response.data.items,
  //   //   selectedVideo: response.data.items[0]
  //   // });
  //   console.log(term);
  // };

  // onVideoSelect = video => {
  //   this.setState({ selectedVideo: video });
  // };

  // renderList() {
  //   return <VideoDetail video={this.props.selectedVideo} />;
  // }

  render() {
    // const { selectedVideo, videos } = this.props;
    // console.log("app props", selectedVideo, videos);
    console.log(this.props);
    return (
      <div className="ui container">
        <SearchBar />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* <VideoDetail video={selectedVideo} /> */}
              {/* {this.renderList()} */}
            </div>
            <div className="five wide column">
              {/* <VideoList onVideoSelect={this.onVideoSelect} videos={videos} /> */}
              <VideoList videos={this.props.videos} />
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
