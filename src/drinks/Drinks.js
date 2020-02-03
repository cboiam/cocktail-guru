import "./Drinks.css";
import React from "react";
import drinks from "../mocks/filter.json";
import { Link } from "react-router-dom";
import Tag from "../shared/tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default class Drinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = { drinks: [] };
    }

    componentDidMount() {
        this.setState({ drinks: drinks.drinks });
    }

    render() {
        return (
            <div className="drinks container">
                {this.state.drinks.map(d => (
                    <div className="drink-detail bg-dark row">
                        <Link className="drink-link" to={`/drinks/detail/${d.idDrink}`}>
                            <div className="drink-info">
                                <div className="drink-image">
                                    <img src="/assets/drink.jpg" />
                                </div>
                                <h4 className="drink-title h4 text-white"
                                >
                                    {d.strDrink}
                                </h4>
                            </div>
                            <div className="drink-icon text-white">
                                <FontAwesomeIcon icon={faChevronRight} className="h4 mb-0" />
                            </div>
                        </Link>
                    </div>))
    }
            </div>
        );
    }
}