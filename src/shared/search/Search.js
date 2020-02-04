import "./Search.css";
import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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

  search = event => {
    if (
      this.state.search === null ||
      this.state.search === "" ||
      this.state.search === "Search..."
    ) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="search-bar form-group bg-dark rounded-0">
          <input
            value={this.state.search}
            onChange={this.update}
            onFocus={this.clean}
            onBlur={this.reset}
            type="text"
            className={`search form-control bg-transparent rounded-0 text-white ${this.props.color}`}
          />
          <Link
            onClick={this.search}
            to={`/drinks/search/${encodeURIComponent(this.state.search)}`}
            className={`btn search-icon rounded-0 ${this.props.icon}`}
          >
            <FontAwesomeIcon
              className={`text-white ${this.props.color}`}
              icon={faSearch}
            />
          </Link>
        </div>
      </div>
    );
  }
}
