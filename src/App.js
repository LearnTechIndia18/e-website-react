import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/login/signin';
import ForgotPassword from './components/login/ForgotPassword'
import Register from './components/login/Register';
import mainboard from './mainboard';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Login: false,
    }
  }
  render() {
    var token = localStorage.getItem("token")
    if (!token) {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/forgotpassword" component={ForgotPassword} />
            <Route exact path="/register" component={Register} />
   
          </Switch>
        </Router>
      )
    }
    else {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={mainboard} />
          </Switch>
        </Router>
      );
    }
  }
}
export default App;
