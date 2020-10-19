import React, {Component} from 'react';
import fire from '../../components/pages/firebase';
import Login from '../../components/login';
import admin from '../../components/pages/admin';
import '../../components/pages/loginface.css';

class loginface extends Component {

    constructor(){
      super();
      this.state = {
        user: null
      }
    }
  
    componentDidMount(){
      this.authListener();
    }
  
    authListener(){
      fire.auth().onAuthStateChanged((user) => {
        if(user){
          this.setState({user});
        }else{
          this.setState({user:null});
        }
      });
    }
  
    render(){
      return (
          <div>
            {this.state.user ? (<admin />) : (<Login />)}
          </div>
      );
    }
  }
  
  export default loginface;