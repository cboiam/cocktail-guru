import "./Random.css";
import React from "react";
import axios from "axios";
import Loading from "../../shared/loading/Loading";
import Tag from "../../shared/tag/Tag";
import { Link } from "react-router-dom";
import { faArrowRight, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drink: "", loaded: false };
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

    return (
      <div className="random row">
        <div className="random-image-container col-12 col-md-7">
          <div className="random-content bg-dark text-white">
            <Link
              to={`/drink/${this.state.drink.idDrink}`}
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
                  to={`/drink/${this.state.drink.idDrink}`}
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
                <div className="d-none d-lg-block">
                  <Tag
                    link={`/filter/glasses/${encodeURIComponent(
                      this.state.drink.strGlass
                    )}`}
                  >
                    {this.state.drink.strGlass}
                  </Tag>
                  <Tag
                    link={`/filter/categories/${encodeURIComponent(
                      this.state.drink.strCategory
                    )}`}
                  >
                    {this.state.drink.strCategory}
                  </Tag>
                  <Tag
                    link={`/filter/alcoholics/${encodeURIComponent(
                      this.state.drink.strAlcoholic
                    )}`}
                  >
                    {this.state.drink.strAlcoholic}
                  </Tag>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}
