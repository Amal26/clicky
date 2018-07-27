import React from 'react';
import './Jumbotron.css';

const Jumbotron = (props) => (
    <div className = "jumbotron">
    <h1> Sailor Moon React Memory Game! </h1>
    <p> Pick a charachter but not the same, or you will lose. </p>
    <p> Score: {props.score} <span> High Score: {props.highScore}</span></p>
    </div>
)

export default Jumbotron;