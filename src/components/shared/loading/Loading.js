import "./Loading.css";
import React from "react";

export default props => (
  <div className={`loading-container ${props.className}`}>
    <img className={`loading`} src="/assets/spinner.png" alt="Loading" />
  </div>
);
