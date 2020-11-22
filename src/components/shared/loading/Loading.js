import "./Loading.css";
import React from "react";

const publicUrl = process.env.PUBLIC_URL;

export default props => (
  <div className={`loading-container ${props.className}`}>
    <img className={`loading`} src={`${publicUrl}/assets/spinner.png`} alt="Loading" />
  </div>
);
