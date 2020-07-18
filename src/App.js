import React from 'react';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { FriendsBar } from './components/FriendsBar';

function App() {
  const initialFriends = ["Keerat", "Ishaan", "Harmeen"];
  return (
    <div>
      <Navigation/>
      <FriendsBar initialFriends={initialFriends}/>
    </div>
  );
}

export default App;
