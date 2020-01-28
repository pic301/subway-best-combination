import React from "react";
import { BrowserRouter as Router,Switch,Route,} from 'react-router-dom' 
import Detail from './pages/detail'
import Home from './pages/Home'

const App = () => {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/detail/:sandwichId/:sandwichtitle/:sandwichDesc"} component={Detail}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
