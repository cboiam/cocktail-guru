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
    if (!this.state.userName) {
      return;
    }

    this.props.login(this.state.userName);
    this.props.history.goBack();
  };

  cancel = () => this.props.history.goBack();

  render() {
    return (
      <div className="login">
        <div className="login-image"></div>
        <div className="login-container col-sm-12 col-md-5 col-lg-3 bg-dark">
          <div className="form-group">
            <label className="username-label text-white" htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              className="form-control username-input bg-secondary text-white"
              id="userName"
              name="userName"
              autoComplete="off"
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
