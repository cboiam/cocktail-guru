import "./Filters.css";
import React from "react";
import Filter from "./filter/Filter";
import { withToggle } from "../../../hoc/WithToggle";

const filters = props => (
  <div className="filter-container">
    <div className="filters">
      <Filter link="/filters/categories">Categories</Filter>
      <Filter link="/filters/glasses">Glasses</Filter>
      <Filter link="/filters/ingredients">Ingredients</Filter>
      <Filter link="/filters/alcoholics">Alcoholic</Filter>
    </div>
  </div>
);

export default withToggle(filters, "filters");