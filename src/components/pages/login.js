import React from 'react';
import { signInWithGoogle } from '../../components/pages/firebase';
import { auth } from '../../components/pages/firebase';
import '../../components/pages/login.css';
import { Button } from '../Button';


class login extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='hero-container'>
      <div className='user-info'>
        {

          this.state.currentUser ?

            (<div>
              <div>
                <img src={this.state.currentUser.photoURL} />
              </div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div>

              <button onClick={() => auth.signOut()}>LOG OUT</button>
            </div>
            ) :

           

            <Button onClick={signInWithGoogle} className='btns'buttonStyle='btn--outline' buttonSize='btn--large'> SIGN IN WITH GOOGLE</Button>

        }
      </div >
      </div>
    );
  }
}


export default login;