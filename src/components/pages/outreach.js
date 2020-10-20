import React from 'react';
import '../../App.css';
import { Button } from '../Button';



 function Outreach ()  {
  return (
    
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
        
      


  );
}

export default Outreach;
