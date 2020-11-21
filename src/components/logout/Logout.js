import React from "react";
import { Redirect } from "react-router-dom";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "";

export default props => {
  props.logout();
  return <Redirect to={`${baseUrl}/`} />;
};
