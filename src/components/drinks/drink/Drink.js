import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Loading from "../../shared/loading/Loading";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "";

export default class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  render() {
    const loadedClass = this.state.loaded ? "" : "d-none";
    const loadingClass = !this.state.loaded ? "" : "d-none";

    return (
      <div className="drink-detail bg-dark row">
        <Link
          className="drink-link"
          to={`${baseUrl}/drinks/detail/${this.props.drink.idDrink}`}
        >
          <div className="drink-info">
            <div className="drink-image">
              <img
                src={this.props.drink.strDrinkThumb}
                className={loadedClass}
                onLoad={this.setLoaded}
                alt={this.props.drink.strDrink}
              />
              <Loading className={`drink-image ${loadingClass}`} />
            </div>
            <h4 className="drink-title h4 text-white">
              {this.props.drink.strDrink}
            </h4>
          </div>
          <div className="drink-icon text-white">
            <FontAwesomeIcon icon={faChevronRight} className="h4 mb-0" />
          </div>
        </Link>
      </div>
    );
  }
}
