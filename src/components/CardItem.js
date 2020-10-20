/*@flow*/
import React from 'react';
import { Link } from 'react-router-dom';
//importing all dependiencies, libraries, and subsite js pages by category- Hamilton Nguyen 10/19/2020

// This js file serves as a template to generate a generic format of a card object in card.js file - Hamilton Nguyen 10/19/2020
function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;