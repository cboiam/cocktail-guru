import "./Filter.css";
import React from "react";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";
import Loading from "../../../shared/loading/Loading";
import drinks from "../../../mocks/filter.json"

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: "", loaded: false };
  }

  componentDidMount() {
    // axios
    //   .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    //   .then(response => {
    //     this.setState({
    //       img: response.data.drinks[0].strDrinkThumb
    //     });
    //   });

    this.setState({
      loaded: true,
      img: drinks.drinks[0].strDrinkThumb
    });
  }

  goToFilter = () => {
    this.props.history.push(this.props.link);
  };

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const imageClass = this.state.loaded ? "d-block" : "d-none";
    const loadingClass = !this.state.loaded ? "d-flex" : "d-none";

    return (
      <div className="filter" onClick={this.goToFilter}>
        <Link
          to={this.props.link}
          className="filter-content bg-dark text-white"
        >
          <img
            className={`filter-image ${imageClass}`}
            src={this.state.img}
            onLoad={this.setLoaded}
            alt="Random cocktail"
          />
          <Loading className={`filter-image ${loadingClass}`} />
          <div className="filter-name h4 mb-0">{this.props.children}</div>
        </Link>
      </div>
    );
  }
}

export default withRouter(Filter);
