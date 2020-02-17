//dependency
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeLayout from "./components/HomeLayout";
import NavTabs from "./components/Nav";
import { withRouter } from "react-router-dom";

//pages
import Detail from "./pages/detail";
import Home from "./pages/Home";
import Combination from "./pages/Combination";
import store from "./pages/store";
import Login from "./pages/login";
import Post from "./pages/Post";
import Board from "./pages/board";

const App = ({ location }) => {
  console.log(location);
  return (
    <>
      <Router>
        {location.pathname === "/login" ? (
          ""
        ) : (
          <div>
            <HomeLayout />
            <NavTabs />
          </div>
        )}
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route
            path={"/detail/:sandwichId/:sandwichtitle/:sandwichDesc"}
            component={Detail}
          ></Route>
          <Route path={"/combination"} component={Combination}></Route>
          <Route path={"/store"} component={store}></Route>
          <Route path={"/post"} component={Post}></Route>
          <Route path={"/board"} component={Board}></Route>
          <Route path={"/login"} component={Login}></Route>
        </Switch>
      </Router>
    </>
  );
};

export default withRouter(App);
