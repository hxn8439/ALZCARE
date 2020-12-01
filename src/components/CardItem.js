// /*@flow*/
// import React from 'react';
// import { Link } from 'react-router-dom';

// function CardItem(props) {
//   return (
//     <>
//       <li className='cards__item'>
//         <Link className='cards__item__link' to={props.path}>
//           <figure className='cards__item__pic-wrap' data-category={props.label}>
//             <img
//               className='cards__item__img'
//               alt='Travel Image'
//               src={props.src}
//             />
//           </figure>
//           <div className='cards__item__info'>
//             <h5 className='cards__item__text'>{props.text}</h5>
//           </div>
//         </Link>
//       </li>
//     </>
//   );
// }

// export default CardItem;
/*@flow*/
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

// This js file serves as a template to generate a generic format of a card object in card.js file - Hamilton Nguyen 10/19/2020
function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
          <div className="go_somewhere">
            <Button
              className="btns"
              buttonStyle="btn--dark"
              buttonSize="btn--medium"
              onClick={() =>
                window.open(
                  "https://www.alz.org/asian/overview.asp?nl=KO&dL=EN",
                  "_blank"
                )
              }
            >
              Learn More
            </Button>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
