import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { FriendsBar } from './components/FriendsBar';

function App() {
  return (
    <div>
      <Navigation></Navigation>,
      <FriendsBar></FriendsBar>
    </div>
  );
}

export default App;
