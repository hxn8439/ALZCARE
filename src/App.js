/*@flow*/
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Research from './components/pages/Research';
import resources from './components/pages/Resources';
import Cards from './components/Cards';
import Outreach from './components/pages/Outreach';
import login from './components/pages/Login';
import Footer from './components/Footer';
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

function App() {
//functional App interface to return all subsite pages into the Environment. - Hamilton Nguyen 10/19/2020
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
      <Route path='/outreach' component={Outreach}/>
      <Route path='/login' component={login}/>
    </Switch>
    </Router>
    <Footer/>
    </>
    //Utilizing route path functions to statically link all subsite pages using Router<> and Switch<> - Hamilton Nguyen 10/19/2020
  );
}


export default App;
