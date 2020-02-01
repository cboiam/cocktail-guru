import "./Login.css";
import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  updateUserName = event => this.setState({ userName: event.target.value });

  submit = () => {
    this.props.login(this.state.userName);
    this.props.history.goBack();
  };

  cancel = () => this.props.history.goBack();

  render() {
    return (
      <div className="login">
        <div className="login-container">
          <div className="form-group">
            <label className="username-label" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              className="form-control username-input"
              id="userName"
              name="userName"
              value={this.state.userName}
              onChange={this.updateUserName}
            />
          </div>

          <div>
            <button
              type="submit"
              className="login-submit btn btn-sm btn-success"
              onClick={this.submit}
            >
              Login
            </button>
          </div>
          <div>
            <button
              type="reset"
              className="login-cancel btn btn-sm btn-danger"
              onClick={this.cancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
