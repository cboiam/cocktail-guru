import "./Filters.css";
import React from "react";
import Filter from "./filter/Filter";

export default props => (
  <div className="filter-container">
    <div className="filters">
      <Filter link="/filters/categories">Categories</Filter>
      <Filter link="/filters/glasses">Glasses</Filter>
      <Filter link="/filters/ingredients">Ingredients</Filter>
      <Filter link="/filters/alcoholic">Alcoholic</Filter>
    </div>
  </div>
);
