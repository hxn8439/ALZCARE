/* @flow */
import React, {useState} from 'react'
import{Link} from 'react-router-dom';
import './Navbar.css';
// importing a dependencies, libraries and css files. - Hamilton Nguyen 10/19/2020

// The Navbar() function is to serve a return out environment to statically link all subsite pages through a bar navigation within the ALZCARE site. - Hamilton Nguyen 10/19/2020
function Navbar() {
    const [click,setClick]=useState(false);

    const handleClick =()=>setClick(!click)
    const closeMobileMenu = () => setClick(false);
    return (
        <>
          <nav className="navbar">
              <div className="navbar-container">
                  <Link to="/" className="navbar-logo">
                      AlzCare
                  </Link>
                  <div className='menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                  </div>
                  <ul className={click ? 'nav-menu active': 'nav-menu'}>
                      <li className = 'nav-item'>
                          <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                          </Link>
                      </li>
                      <li className = 'nav-item'>
                          <Link to='/resources' className='nav-links' onClick={closeMobileMenu}>
                            Community Resources
                          </Link>
                      </li>
                      <li className = 'nav-item'>
                          <Link to='/cards' className='nav-links' onClick={closeMobileMenu}>
                            Dementia Info
                          </Link>
                      </li>
                      <li className = 'nav-item'>
                          <Link to='/research' className='nav-links' onClick={closeMobileMenu}>
                            Research
                          </Link>
                      </li>
                      <li className = 'nav-item'>
                          <Link to='/outreach' className='nav-links' onClick={closeMobileMenu}>
                           Outreach
                          </Link>
                      </li>
                      <li className = 'nav-item'>
                          <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                          </Link>
                      </li>
                      

                  </ul>

              </div>
            </nav>  
        </>
    )
}
//According to above, each subsite are called in as li objects and classified by className, link, and display text. - Hamilton Nguyen 10/19/2020


export default Navbar;
