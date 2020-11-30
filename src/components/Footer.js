import React from 'react';
import '../App.css';
import './Footer.css';

//Footer for bottom of website - Johnny Pham 11/29/2020
function Footer() {
  return (
    <>
      <div class="bottombar">
        <p>
          In partnership with &nbsp; &nbsp;
          <a href="https://www.somangsociety.org/" target="_blank">
          <img src="images/somang_logo.png" alt="logo" height="60px" align="right"/>
          </a>
        </p>
      </div>
      <div class="copyright">
        <p>Copyright © 2020 University of Texas at Arlington. &nbsp; All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
