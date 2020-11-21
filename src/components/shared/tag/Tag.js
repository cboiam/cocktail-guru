import "./Tag.css";
import React from "react";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "";

export default props =>
  props.children ? (
    <Link
      className={`tag btn btn-sm btn-outline-light text-light rounded-0 ${props.className}`}
      to={baseUrl + props.link}
    >
      {props.children}
    </Link>
  ) : null;
