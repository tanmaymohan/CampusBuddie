import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import MenuAppBar from './topmenu.js';
import PersistentDrawer from './sidemenu.js';

class App extends Component {
  render() {
    return (
      <div className="App">
<PersistentDrawer/>
 </div>
    );
  }
}

export default App;
