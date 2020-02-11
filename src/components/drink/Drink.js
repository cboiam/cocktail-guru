import "./Drink.css";
import React from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import Tag from "../shared/tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import Loading from "../shared/loading/Loading";

class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, drink: {}, liked: false, disliked: false };
  }

  componentDidMount() {
    Axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`
    ).then(response => {
      this.setState({ drink: response.data.drinks[0] });
    });
  }

  like = () => {
    const liked = this.state.liked;
    this.setState({ liked: !liked, disliked: false });
  };

  dislike = () => {
    const disliked = this.state.disliked;
    this.setState({ liked: false, disliked: !disliked });
  };

  setLoaded = () => {
    this.setState({ loaded: true });
  };

  getIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (this.state.drink[`strIngredient${i}`]) {
        ingredients.push({
          name: this.state.drink[`strIngredient${i}`],
          measure: this.state.drink[`strMeasure${i}`]
        });
      }
    }

    return ingredients;
  };

  render() {
    const loadedClass = this.state.loaded ? "" : "d-none";
    const loadingClass = !this.state.loaded ? "" : "d-none";
    const ingredients = this.getIngredients();

    return (
      <div className="drink-detail-page container">
        <div className="row text-white bg-dark">
          <div className="drink-detail-image col-md-5 col-lg-3">
            <div className="drink-detail-image-container">
              <img
                className={loadedClass}
                onLoad={this.setLoaded}
                src={this.state.drink.strDrinkThumb}
                alt={this.state.strDrink}
              ></img>
              <Loading className={loadingClass} />
            </div>
          </div>
          <div className="drink-detail-header col-md-7 col-lg-9">
            <div className="drink-detail-like">
              <button
                onClick={this.like}
                className={`btn btn-lg text-white rounded-0 ${
                  this.state.liked ? "text-success" : ""
                }`}
              >
                <FontAwesomeIcon className="like-icon" icon={faThumbsUp} />
                Like
              </button>
              <button
                onClick={this.dislike}
                className={`btn btn-lg text-white rounded-0 ${
                  this.state.disliked ? "text-danger" : ""
                }`}
              >
                <FontAwesomeIcon className="dislike-icon" icon={faThumbsDown} />
                Dislike
              </button>
            </div>
            <div>
              <h1>{this.state.drink.strDrink}</h1>
              <div>
                <Tag
                  link={`/drinks/categories/${this.state.drink.strCategory}`}
                >
                  {this.state.drink.strCategory}
                </Tag>
                <Tag link={`/drinks/glasses/${this.state.drink.strGlass}`}>
                  {this.state.drink.strGlass}
                </Tag>
                <Tag
                  link={`/drinks/alcoholics/${this.state.drink.strAlcoholic}`}
                >
                  {this.state.drink.strAlcoholic}
                </Tag>
                {ingredients
                  ? ingredients.map(i => (
                      <Tag
                        link={`/drinks/ingredients/${i.name}`}
                        key={`ingredient-tag-${i.name}`}
                      >
                        {i.name}
                      </Tag>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className="drink-detail-info">
            <div>
              <h3>Characteristics</h3>
              {this.state.drink.strIBA && <p>{this.state.drink.strIBA}</p>}
              <ul>
                <li>Category: {this.state.drink.strCategory}</li>
                <li>Glass: {this.state.drink.strGlass}</li>
                <li>Alcoholic: {this.state.drink.strAlcoholic}</li>
              </ul>
            </div>
            <div>
              <h3>Instructions</h3>
              <div>
                <ul>
                  {ingredients
                    ? ingredients.map(i => (
                        <li key={`ingredient-${i.name}`}>
                          {i.name}
                          {i.measure && `: ${i.measure}`}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
              <div>
                <p>{this.state.drink.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Drink);
