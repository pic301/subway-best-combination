//Dependency
import React from "react";
import { BrowserRouter as Router,Switch,Route,} from 'react-router-dom' 

//pages
import Detail from './pages/detail'
import Home from './pages/Home'
import Combination from './pages/Combination'
import store from './pages/store'

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/detail/:sandwichId/:sandwichtitle/:sandwichDesc"} component={Detail}></Route>
          <Route exact path={"/combination"} component={Combination}></Route>
          <Route exact path={"/store"} component={store}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
