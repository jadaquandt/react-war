import React from 'react';
import Table from './Table';
import Game from './Game';


import {
  BrowserRouter as Router,
//   Route,
//   Redirect,
} from 'react-router-dom';


const App = () => (
  <Router>
    {/* <Redirect from='/' to='/home' /> */}
    <Table />
    <Game/>
        {/* <Route exact path="/home" />
        <Route path="/home/game" component={Game} /> */}
  </Router>
)

export default App;