import "./Drink.css";
import React from "react";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class Drink extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, drink: {} }
    }

    componentDidMount() {
        Axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`).then(response => {
            this.setState({ drink: response.data.drinks[0] });
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row bg-dark">
                    <div className="text-white">{this.state.drink.strDrink}</div>
                </div>
            </div>
        );
    }
}

export default withRouter(Drink);