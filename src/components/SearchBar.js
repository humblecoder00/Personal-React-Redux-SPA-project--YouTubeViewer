import React, { Component } from "react";
import { connect } from "react-redux";
import { onInputChange, searchAndSelectFirstVideo } from "./../actions/index";

class SearchBar extends Component {
  handleInput = event => {
    this.props.onInputChange(event.target.value);
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.searchAndSelectFirstVideo(this.props.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui input">
              <input
                type="text"
                value={this.props.searchTerm}
                onChange={this.handleInput}
                placeholder="Search"
              />
              <button className="ui icon button">
                <i className="search icon" />
              </button>
            </div>
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
