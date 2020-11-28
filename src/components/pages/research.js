import React from "react";
import '../../components/pages/Research.css';
import { Button } from '../Button';
import { InlineWidget } from "react-calendly";
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

//constant research function was created to return a embedded api named "Calendy" and also a button hyperlink to link a UTA dementia caregiving survey.- Hamilton Nguyen 10/19/2020  
const Research = () => {
  return (   
    <>
    <div className="survey">
    <Button
          className='btns'
          buttonStyle='btn--dark'
          buttonSize='btn--xl'
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

//link to the profile under alzcare web application that functions with calendly. - Hamilton Nguyen 10/19/2020
//"https://calendly.com/alzcare/15min?primary_color=4d5055"
