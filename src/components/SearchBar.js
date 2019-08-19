import React, { Component } from "react";
import { connect } from "react-redux";
import { onInputChange, searchAndSelectFirstVideo } from "./../actions/index";

class SearchBar extends Component {
  handleInput = event => {
    this.props.onInputChange(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: Make sure we call callback from parent component.
    // this.props.onFormSubmit(this.state.term);
    this.props.searchAndSelectFirstVideo(this.props.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.props.searchTerm}
              onChange={this.handleInput}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchTerm: state.searchTerm };
};

export default connect(
  mapStateToProps,
  { onInputChange, searchAndSelectFirstVideo }
)(SearchBar);
