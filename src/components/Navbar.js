import React, {useState} from 'react'
import{Link} from 'react-router-dom';
import './Navbar.css';


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
                          <Link to='/dementia_info' className='nav-links' onClick={closeMobileMenu}>
                            Dementia Information
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
                          <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                           Contact Us
                          </Link>
                      </li>
                      
                      
                  </ul>

              </div>
            </nav>  
        </>
    )
}

export default Navbar
