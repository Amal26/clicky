import React, { Component } from 'react';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Card from './components/Card/Card.js';
import cards from './cards.json';
import './index.css';


class App extends Component {

  state = {
    cards:cards,
    score:0,
    highScore: 0,
    clickedCards: [],
  }
  
  // update when card us clicked
  uodateScore = (id) => {
    if (this.state.clickedCards.includes(id)){
      alert('You already picked this character!');
      this.setState({score: 0, clickedCards: []})
    }
  
    // if image has not been picked before
    else {
      this.setState({clickedCards: [...this.state.clickedCards, id]})
      this.setState({score: this.state.score +1})
      // if user gets high schore
      if (this.state.score >= this.state.highScore){
        this.setState({highScore: this.state.score +1})
      }

      //if user wins
      if (this.state.score === 11){
        this.setState({score: 0, highScore: 8, clickedCards: [], cards:cards})
        alert ('You won!')
      }
    }
  }
   // random cards
   randomCards = (array) => {
     let currentIndex = array.lenth;
     while (0 !== currentIndex){
       let randomIndex = Math.floor(Math.random() * currentIndex);
       currentIndex -= 1;
       let temporaryValue = array[currentIndex];
       array[currentIndex] = array[randomIndex];
       array[randomIndex] = temporaryValue;
     }
     this.setState({randomize:cards});
   }

   // render app
render(){
     return(
       <div>
         <Jumbotron score={this.state.score}highScore={this.state.highScore}/>
         <div className="container">
         {this.state.cards.map(cardRender =>(
           <div className ='col-md-3' id= {cardRender.id}>
           <Card
           image = {cardRender.image}
           randomCards = {() => { this.randomCards(this.state.cards)}}
           updateScore = {() => {this.updateScore(cardRender.id)}} />
           </div>
         
         ))}
         </div>
         </div>
     )
   }
  }



export default App;
