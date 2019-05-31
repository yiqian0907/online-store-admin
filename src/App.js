import React from 'react';
import './App.scss';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './view/Login';
import Admin from './view/Admin';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact render={() => {
          return <Redirect to="/admin"></Redirect>
        }}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" render={(props) => {
          if(sessionStorage.getItem('LOGIN_USER')){
            return <Admin {...props}></Admin>
          }
          return <Redirect to="/login"></Redirect>
        }}></Route>
      </Router>
    </div>
  );
}

export default App;
