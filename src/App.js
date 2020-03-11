import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Quiz from './components/Quiz';



function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
