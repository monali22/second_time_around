import React from 'react';
import Form from "./Form/Form"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//SETTING GIT HUB TEST 1
function App() {
  return (
    <Router>
    <div>
      
      <Switch>
        <Route exact path="/" component={Form} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;


