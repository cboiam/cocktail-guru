import "./Home.css";
import React from "react";
import Filters from "./filters/Filters";
import Search from "../shared/search/Search";
import Random from "./random/Random";
import { withToggle } from "../../hoc/WithToggle";

class Home extends React.Component {
  render() {
    const FirstColumn = withToggle(() => (
      <div className="home-filters col-lg-5">
        <Filters />
      </div>
    ), "filters", "home_filters");

    const ToggledSearch = withToggle(Search, "home_search");
    const ToggledRandom = withToggle(Random, "home_random");

    const SecondColumn = () => (
      <div className="home-search col-lg-7">
        <ToggledSearch />
        <ToggledRandom />
      </div>
    );

    return (
      <div className="home">
        <div className="home-content row">
          <FirstColumn />
          <SecondColumn />
        </div>
      </div>
    );
  }
}

export default Home;