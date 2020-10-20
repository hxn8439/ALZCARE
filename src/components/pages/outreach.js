import React from 'react';
import '../../App.css';
import { Button } from '../Button';
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020


// the outreach function is to serve as a return page to statically place two weblinked buttons to redirect weChat and kakotalk website for users to access those messaging platform. - Hamilton Nguyen 10/19/2020
 function Outreach ()  {
  return (
    <div className='hero-container'>
    <div className='hero-btns'>
    <Button
      className='btns'
      buttonStyle='btn--outline1'
      buttonSize='btn--large'
      onClick={() => window.open("https://web.wechat.com/.", "_blank")}
    >
      WeChat
    </Button>
    <Button
      className='btns'
      buttonStyle='btn--outline1'
      buttonSize='btn--large'
      onClick={() => window.open("https://open.kakao.com/o/gPYKtsqc.", "_blank")}
    >
      KakaoTalk
    </Button>
    
    
  </div>       
  </div>     
      


  );
}

export default Outreach;
