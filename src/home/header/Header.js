import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";

export default props => {
  let login;
  if (props.login === "") {
    login = (
      <Link
        to="/login"
        className="auth-button btn btn-outline-danger my-2 my-sm-0"
      >
        Login
      </Link>
    );
  } else {
    login = (
      <Link
        to="/logout"
        className="auth-button btn btn-outline-danger my-2 my-sm-0"
      >
        Logout
      </Link>
    );
  }

  return (
    <header className="header">
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <h1 className="header-title navbar-brand mb-0">
            <FontAwesomeIcon icon={faCocktail} className="header-icon" />
            Cocktail Guru
          </h1>
        </div>
        {login}
      </nav>
    </header>
  );
};
