import "./Drinks.css";
import React from "react";
import drinks from "../mocks/filter.json";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Drink from "./drink/Drink";
import _ from "lodash";

class Drinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drinks: [] };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate =
      !_.isEqual(this.state.drinks, nextState.drinks) ||
      this.props.match.params.filter !== nextProps.match.params.filter ||
      this.props.match.params.value !== nextProps.match.params.value;

    return shouldUpdate;
  }

  getDrinks() {
    const endpoint = this.getEndpoint();
    axios.get(endpoint).then(response => {
      this.setState({ drinks: response.data.drinks });
    });

    // this.setState({ drinks: drinks.drinks });
  }

  componentDidMount() {
    this.getDrinks();
  }

  componentDidUpdate(previousProps, previousState, snapshot) {
    this.getDrinks();
  }

  getEndpoint() {
    const endpoints = {
      ingredients: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=",
      alcoholics: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=",
      categories: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=",
      glasses: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=",
      search: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
    };

    return (
      endpoints[this.props.match.params.filter] + this.props.match.params.value
    );
  }

  render() {
    return (
      <div className="drinks container">
        {this.state.drinks.map(d => (
          <Drink key={d.idDrink} drink={d} />
        ))}
      </div>
    );
  }
}

export default withRouter(Drinks);
