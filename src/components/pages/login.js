import React from 'react';
import { signInWithGoogle } from '../../components/pages/firebase';
import { auth } from '../../components/pages/firebase';
import '../../components/pages/login.css';
import { Button } from '../Button';

//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

// this class login is served as a closed admin page with certain approved priviledges... Rules and conditions are still being implemented and will be shown in iternation 3-- Hamilton Nguyen 10/19/2020
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

  refreshPage() {
    window.location.reload();
  }

  //In div for this.state.currentUser ? dont deleete
              
 
  // This is a render environment which create the admin layout with new set of priviledges that update the contents of the website using firebase cloud firestore. -- Hamilton Nguyen 10/19/2020
  render() {
    return (
      <div className='hero-container'>
      <div className='user-info'>
        {


          
          this.state.currentUser ?

            (<div>
              
              <div>
                <adminnav/>
              </div>

              <br></br>
              <br></br>  
              <br></br>  
              <br></br> 

              <div>
              <img src={this.state.currentUser.photoURL} />
              </div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div>
              <br></br>
              <br></br>  
              <br></br>  
              <br></br> 
              <Button  onClick={() => window.open("http://localhost:3001/pages/login#/dashboard", "_blank")} className='btns'buttonStyle='btn--dark' buttonSize='btn--large'>Admin Control Panel</Button>
              <br></br>
              <br></br>  
              <br></br>  
              <br></br>     
              <Button onClick={() => auth.signOut()}className='btns'buttonStyle='btn--dark' buttonSize='btn--large'>LOG OUT</Button>
            </div>


            ) :

           
                
            <Button onClick={signInWithGoogle} className='btns'buttonStyle='btn--dark' buttonSize='btn--large'> SIGN IN WITH GOOGLE</Button>

        }
      </div >
      </div>
    );
  }
}


export default login;