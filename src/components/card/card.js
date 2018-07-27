import React from 'react';
import './Card.css';

const onClick = (props) => {
    props.randomCards();
    props.updateScore(props.id);
}

const Card = (props) => (
    <div>
        <a className= "thumbnail" onClick={() => onClick(props)}>
        <img alt="sailormoon" src={props.image}  />
        </a>
  </div>
)

export default Card;