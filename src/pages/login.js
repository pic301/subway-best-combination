import React, { Component } from "react";
import "./login.css";
import fire, { provider } from "../components/firebaseConfig";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
  }
  _googleLogin = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithPopup(provider)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  _login = e => {
    e.preventDefault();
    //fire  = firebase.initializeApp(firebaseConfig);
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ error });
      });
  };
  _signUp = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(res => {
        this.setState({
          email: "",
          password: "",
          error: ""
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { error } = this.state;
    return (
      <div className="login_container">
        <div className="login" >
          <img src="http://subway.co.kr/images/franchise/img_barnd_comp01.jpg" alt=""/>
          <h3>LOGIN</h3>
          <form>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="email"
            />
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="password"
            />
          </form>
          <button className="btn_login"onClick={this._login}>Login</button>
          <button className="btn_signup"onClick={this._signUp}>SignUp</button>
          <button className="btn_google" onClick={this._googleLogin}>Google</button>
          {error && <p>{error.message}</p>}
        </div>
      </div>
    );
  }
}

export default Login;
