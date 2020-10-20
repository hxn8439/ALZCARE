/*@flow*/
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

//card function are created to return static cards that goes onto the dementia info page. Withinn the function, a total of three cards with disignated classNames are created.- Hamilton Nguyen 10/19/2020
function Cards() {
  return (
    <div className='cards'>
      <h1>Dementia Information</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Write whatever you want I do not care. Goodbye!!'
              label='Alzhemires'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Write whatever you want I do not care. Goodbye!!'
              label='Dementia'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Write whatever you want I do not care. Goodbye!!'
              label='Dementia'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;