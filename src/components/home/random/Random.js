import "./Random.css";
import React from "react";
import axios from "axios";
import Loading from "../../shared/loading/Loading";
import Tag from "../../shared/tag/Tag";
import { Link } from "react-router-dom";
import { faArrowRight, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withToggle } from "../../../hoc/WithToggle";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drink: {}, loaded: false };
  }

  load = () => {
    this.setState({ loaded: false });

    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => {
        this.setState({
          drink: response.data.drinks[0]
        });
      });
  };

  componentDidMount() {
    this.load();
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const loadedClass = this.state.loaded ? "" : "d-none";
    const loadingClass = !this.state.loaded ? "" : "d-none";

    const ToggledRandomizer = withToggle(() => (
      <React.Fragment>
        <h4 className="random-title">Your random drink for today.</h4>
        <div className="randomize">
          <button
            className="btn btn-lg btn-outline-danger rounded-0"
            onClick={this.load}
          >
            <FontAwesomeIcon
              className="randomize-icon"
              icon={faRedoAlt}
            />
            Get another
                </button>
        </div>
      </React.Fragment>
    ), "random_button");

    const ToggledTags = withToggle(() => (
      <div className="d-none d-lg-block">
        <Tag
          link={`/drinks/glasses/${encodeURIComponent(
            this.state.drink.strGlass
          )}`}
        >
          {this.state.drink.strGlass}
        </Tag>
        <Tag
          link={`/drinks/categories/${encodeURIComponent(
            this.state.drink.strCategory
          )}`}
        >
          {this.state.drink.strCategory}
        </Tag>
        <Tag
          link={`/drinks/alcoholics/${encodeURIComponent(
            this.state.drink.strAlcoholic
          )}`}
        >
          {this.state.drink.strAlcoholic}
        </Tag>
      </div>
    ), "tags", "home_tags");

    return (
      <div className="random row">
        <div className="random-image-container col-12 col-md-7">
          <div className="random-content bg-dark text-white">
            <Link
              to={`/drinks/detail/${this.state.drink.idDrink}`}
              className="random-image-link"
            >
              <img
                className={`random-image ${loadedClass}`}
                src={this.state.drink.strDrinkThumb}
                onLoad={this.setLoaded}
                alt="Random cocktail"
              />
            </Link>
            <Loading className={`random-image ${loadingClass}`} />
          </div>
        </div>
        <div className="random-description-container col-12 col-md-5">
          <div className="random-description bg-dark text-white">
            <div className="random-description-content">
              <div className={loadedClass}>
                <Link
                  to={`/drinks/detail/${this.state.drink.idDrink}`}
                  className="random-drink btn rounded-0 text-white"
                >
                  <h2 className="random-drink-title">
                    {this.state.drink.strDrink}
                  </h2>
                  <FontAwesomeIcon
                    className="random-link"
                    icon={faArrowRight}
                  />
                </Link>
                <ToggledTags />
              </div>
              <ToggledRandomizer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withToggle(Random, "random");