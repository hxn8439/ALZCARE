import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import outreach from './components/pages/outreach';
import research from './components/pages/research';
import dementia_info from './components/pages/dementia_info';
import resources from './components/pages/resources';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/'exact component={Home}/>
      <Route path='/Contact'exact component={Contact}/>
      <Route path='/outreach'exact component={outreach}/>
      <Route path='/research'exact component={research}/>
      <Route path='/dementia_info'exact component={dementia_info}/>
      <Route path='/resources'exact component={resources}/>
    </Switch>
    </Router>
    </>
  );
}

export default App;
