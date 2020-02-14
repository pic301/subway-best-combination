//dependency
import React from "react";
import { BrowserRouter as Router,Switch,Route,} from 'react-router-dom' 

//pages
import Detail from './pages/detail'
import Home from './pages/Home'
import Combination from './pages/Combination'
import store from './pages/store'
import Login from './pages/login'
import Post from './pages/Post'
import Board from './pages/board'

const App = () => {
  
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/detail/:sandwichId/:sandwichtitle/:sandwichDesc"} component={Detail}></Route>
          <Route exact path={"/combination"} component={Combination}></Route>
          <Route exact path={"/store"} component={store}></Route>
          <Route exact path={"/login"} component={Login}></Route>
          <Route exact path={"/post"} component={Post}></Route>
          <Route exact path={"/board"} component={Board}></Route>
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
