import "./Search.css";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "Search..." };
  }

  clean = () => {
    this.setState({ search: "" });
  };

  reset = () => {
    if (!this.state.search) {
      this.setState({ search: "Search..." });
    }
  };

  update = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    return (
      <div className="">
        <div className="search-bar form-group bg-dark rounded-0">
          <input
            value={this.state.search}
            onChange={this.update}
            onFocus={this.clean}
            onBlur={this.reset}
            type="text"
            className="search form-control bg-transparent rounded-0 text-white"
          />
          <button className="btn search-icon">
            <FontAwesomeIcon className="text-white" icon={faSearch} />
          </button>
        </div>
      </div>
    );
  }
}
