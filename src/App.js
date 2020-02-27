//dependency
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

//components
import HomeLayout from "./components/HomeLayout";
import NavTabs from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";
import Footer from './components/Footer'

// Initialize Firebase
import fire from "./components/firebaseConfig";

//pages
import Detail from "./pages/detail";
import Home from "./pages/Home";
import Combination from "./pages/Combination";
import store from "./pages/store";
import Login from "./pages/login";
import Post from "./pages/Post";
import FranchiseInquiry from './pages/franchiseInquiry'
import Board from "./pages/board";


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      authenticated: false,
      user: null,
     
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.setState({
          authenticated: true,
          user: user,
          loading: false
        });
        localStorage.setItem("user", user.uid);
        localStorage.setItem("name", user.displayName);
        console.log(this.state.authenticated);
      } else {
        this.setState({
          authenticated: false,
          user: null,
          loading: false
        });
        localStorage.removeItem("user");
      }
    });
  };
  render() {
    console.log (localStorage["user"])
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }
    console.log(this.state.user)
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/login" render={() => null} />
            <Route
              render={() => (
                <>
                  <HomeLayout />
                  <NavTabs />
                </>
              )}
            />
          </Switch>
          <>
            <Switch>
              <Route exact path={"/login"} component={Login}></Route>
              <Route exact path={"/"} component={Home}></Route>
              <PrivateRoute
                exact
                path={"/detail/:sandwichId/:sandwichtitle/:sandwichDesc"}
                component={Detail}
                authenticated={authenticated}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path={"/combination"}
                component={Combination}
                authenticated={authenticated}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path={"/store"}
                component={store}
                authenticated={authenticated}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path={"/post"}
                component={Post}
                authenticated={authenticated}
              ></PrivateRoute>
              <PrivateRoute
                exact
                path={"/board"}
                component={() => <Board user={this.state.user}/>}
                authenticated={authenticated}
              ></PrivateRoute>
                 <PrivateRoute
                exact
                path={"/franchiseInquiry"}
                component={() =>  <FranchiseInquiry/>}
                authenticated={authenticated}
              ></PrivateRoute>
            </Switch>
          </>
          <Redirect from="/*" to="/" />
          <Switch>
            <Route path="/login" render={() => null} />
            <Route
              render={() => (
                <>
                  <Footer />
                </>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
