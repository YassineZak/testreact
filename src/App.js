import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login';
import Presentation from './components/Presentation';
import Quiz from './components/Quiz';



function App() {
  return (
    <div className="center-screen container">
      <div className="wrapper fadeInDown">
      <h1 className="d-flex justify-content-center align-self-center">Quiz ReactJs</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/presentation" component={Presentation} />
            <Route exact path="/quiz" component={Quiz} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
