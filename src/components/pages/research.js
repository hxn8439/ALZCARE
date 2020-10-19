import React from "react";
import '../../components/pages/Research.css';
import { Button } from '../Button';
import { InlineWidget } from "react-calendly";
 
const Research = () => {
  return (   
    <>
    <div className="survey">
    <Button
          className='btns'
          buttonStyle='btn--dark'
          buttonSize='btn--large'
          onClick={() => window.open("https://dementiacaregiving.questionpro.com", "_blank")}
        >
          Take Our Online Survey
        </Button>
    </div>
    
    <div className="calendly">
      <InlineWidget url="https://calendly.com/alzcare/15min?primary_color=4d5055" />
    </div>
    
    </>
  );
};
 
export default Research;


//"https://calendly.com/alzcare/15min?primary_color=4d5055"
