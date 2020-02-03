import "./Header.css";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCocktail } from "@fortawesome/free-solid-svg-icons";
import Search from "../home/search/Search";

const header = props => {
  const hideSearch = props.location.pathname === "/";

  let login;
  if (props.userName === "") {
    login = (
      <Link
        to="/login"
        className="auth-button btn btn-outline-danger my-2 my-sm-0 rounded-0"
      >
        Login
      </Link>
    );
  } else {
    login = (
      <Link
        to="/logout"
        className="auth-button btn btn-outline-danger my-2 my-sm-0 rounded-0"
      >
        Logout
      </Link>
    );
  }

  return (
    <header className="header">
      <nav className="navbar navbar-dark bg-dark">
        <div>
          <Link to="/" className="logo h1 navbar-brand mb-0">
            <FontAwesomeIcon icon={faCocktail} className="logo-icon" />
            Cocktail Guru
          </Link>
        </div>
        <div className="header-controls">
          <Search color="text-danger" icon="btn-outline-danger" className={`header-search ${hideSearch ? "d-none" : ""}`} />
          {login}
        </div>
      </nav>
    </header>
  );
};

export default withRouter(header);