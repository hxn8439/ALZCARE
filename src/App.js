/*@flow*/
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Research from './components/pages/research';
import resources from './components/pages/resources';
import Cards from './components/Cards';
import loginface from './components/pages/loginface';

function App() {

  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/cards' component={Cards}/>
      <Route path='/resources' component={resources}/>
      <Route path='/research' component={Research}/>
      <Route path='/loginface' component={loginface}/>
    </Switch>
    </Router>
    </>
  );
}


export default App;

