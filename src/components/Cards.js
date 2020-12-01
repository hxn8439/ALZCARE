// /*@flow*/
// import React from 'react';
// import './Cards.css';
// import CardItem from './CardItem';

// function Cards() {
//   return (
//     <div className='cards'>
//       <h1>Dementia Information</h1>
//       <div className='cards__container'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//             <CardItem
//               src='images/img-9.jpg'
//               text='Write whatever you want I do not care. Goodbye!!'
//               label='Alzhemires'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-2.jpg'
//               text='Write whatever you want I do not care. Goodbye!!'
//               label='Dementia'
//               path='/services'
//             />
//             <CardItem
//               src='images/img-2.jpg'
//               text='Write whatever you want I do not care. Goodbye!!'
//               label='Dementia'
//               path='/services'
//             />
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
/*@flow*/
import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

//card function are created to return static cards that goes onto the dementia info page. Withinn the function, a total of three cards with disignated classNames are created.- Hamilton Nguyen 10/19/2020
function Cards() {
  return (
    <div className="cards">
      <h1>Dementia Information</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/pic_eng1.png"
              text="Asians and Pacific Islanders and Alzheimer's"
              label="Website"
            />
            <CardItem
              src="images/pic_eng2.jpg"
              text="Dementia Special (2)-Is there a game that helps memory? No?"
              label="Video"
              path="/services"
            />
            <CardItem
              src="images/pic_eng3.jpg"
              text="Dementia Special-Be a Hero for the Community!"
              label="Video"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/pic_eng4.jpg"
              text="Alzheimer's Association 24/7 Helpline"
              label="Video"
            />
            <CardItem
              src="images/pic_eng5.jpg"
              text="COVID-19: Dementia Challenges to Contact Tracing"
              label="Video"
              path="/services"
            />
            <CardItem
              src="images/pic_eng6.jpg"
              text="Curriculum Module 2B: Defining Dementia and Alzheimer’s"
              label="Video"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
