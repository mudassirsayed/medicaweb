// import { TextField, Card, CardContent, Button } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { onLogin } from "../../../Redux/Authentication/AuthAction";

// import { BASE_URL } from "../../../../resources/APIEndpoints";
// import axios from "../../../utils/axios";
import "./Login.css";
// import setAuthToken from "../../../utils/setAuthToken";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: "",
      // isAuthenticated: false,
    };
  }

  componentDidMount() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated) {
    
      this.props.history.push("/homepage");
    }
  }

  validateForm = () => {
    const { username, password } = this.state;
    return username.length > 0 && password.length > 0;
  };
  _onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const data = {
      userName: username,
      password: password,
    };
    // console.log(newUser);
    this.props.onLogin(data, this.props.history);
    
    
  };
  handelSignup() {
    let path = "/register";
    this.props.history.push(path);
}


  // submit = async (e) => {
  //   e.preventDefault();
  //   const { username, password } = this.state;
  //   var data = {
  //     userName: username,
  //     password: password,
  //   };

  //   await axios
  //     .post(BASE_URL + "/auth/refresh-token", data, {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       localStorage.setItem("user", res.data.refreshToken);
  //       console.log(res);

  //       this.props.history.push("/homepage");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  render() {
    const { username, password } = this.state;
    return (
      <>
      <div className='sign-in'>
          <h2>I already have an account</h2>
          <span>Sign in with your mobile number and password</span>

          <form onSubmit={this.submit} className="login-form" >
              <input
                  type="text"
                  placeholder="Enter Username/ Mobile"
                  name="username"
                  className="form-input"
                  value={username}
                  onChange={this._onHandleChange}
                  required
              />
              <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="form-input"
                  value={password}
                  onChange={this._onHandleChange}
                  required
              />
              <div className="buttons">
                  <button
                      className="custom-button"
                      variant="outlined"
                      type="submit"
                  >
                      SIGN IN
          </button>
                  <button
                      className="custom-button"
                  >
                      Sign in with OTP
          </button>
              </div>
              <p className="signUpButton">
                  Do not have an account ?{" "}
                  <span
                      className="spanSignUpButton"
                      onClick={this.handelSignup.bind(this)}
                  >
                      Sign Up Now!
            </span>
              </p>
          </form>
      </div>
  </>
    );
  }
}

function mapStateToProps(state) {
  return {
    //fetching data from AuthReducer
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { onLogin })(withRouter(Login));
// export default withRouter(Login);
