/*@flow*/
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Research from './components/pages/Research';
import Cards from './components/Cards';

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/cards' component={Cards}/>
      <Route path='/research' component={Research}/>
    </Switch>
    </Router>
    </>
  );
}


export default App;

