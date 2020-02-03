import "./Filters.css";
import React from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class Filters extends React.Component {
  constructor(props) {
    super(props);
    const type = props.location.pathname.replace("/filters/", "").split("/")[0];
    this.state = { type, filters: [] };
  }

  componentDidMount() {
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/list.php?${this.state.type[0]}=list`
      )
      .then(response => {
        const filters = response.data.drinks
          .map(f => {
            const filterKey = Object.keys(f)[0];
            return f[filterKey];
          })
          .filter(f => f !== "" && f !== null);

        this.setState({ filters });
      });
  }

  render() {
    const filters = this.state.filters.map(filter => (
      <Link
        to={`/drinks/${this.state.type}/${encodeURIComponent(filter)}`}
        className="filter-link btn btn-lg col-12 bg-dark text-white rounded-0"
      >
        {filter}
      </Link>
    ));

    return <div className="filters-page container">{filters}</div>;
  }
}

export default withRouter(Filters);
