import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/layout/Navigation';
import { FriendsBar } from './components/layout/FriendsBar';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import { Login } from "./components/auth/Login"
import {Register} from "./components/auth/Register"

function App() {
  /* this is where we initial friends for user based from database */
  const initialFriends = ["Keerat", "Ishaan", "Harmeen"];

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path="/" render={(props) => <FriendsBar {...props} initialFriends={initialFriends} />}/>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
// import { import } from '@babel/types';

export default App;
