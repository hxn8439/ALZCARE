import React, { Component } from 'react';
import fire from '../../components/pages/firebase';

class admin extends Component 
{
  
    logout = () => 
    {
        fire.auth().signOut();
    }

    render()
    {
        return(
            <div>
                <h1>You are home!</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }

}
  
  export default admin;
