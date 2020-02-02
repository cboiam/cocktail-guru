import "./Filter.css";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import Loading from "../../../loading/Loading";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: "", loaded: false };
  }

  componentDidMount() {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        this.setState({
          img: response.data.drinks[0].strDrinkThumb
        });
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
    const loadingClass = !this.state.loaded ? "d-block" : "d-none";

    return (
      <div className="filter" onClick={this.goToFilter}>
        <div className="filter-content bg-dark text-white">
          <img
            className={`filter-image ${imageClass}`}
            src={this.state.img}
            onLoad={this.setLoaded}
            alt="Random cocktail"
          />
          <Loading className={`filter-image ${loadingClass}`} />
          <div className="filter-name h4 mb-0">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Filter);
