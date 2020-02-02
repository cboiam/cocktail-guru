import "./Loading.css";
import React from "react";

export default props => (
  <img
    className={`loading ${props.className}`}
    src="/assets/spinner.png"
    alt="Loading"
  />
);
