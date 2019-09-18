import React from "react";
import {cards} from "../../services/cardApi.js";
import Header from "../Header";
import Card from "../Card";
import "./Content.css";



class Content extends React.Component{
    state = {
      currentScore : 0,
      highScore : 0,
      cards, 
      Clicked:  false
    };


    handleClick = id => {
      this.shuffleArray();
      this.handleScore(id);
    };

    handleScore = id => {
      this.state.cards.forEach(card => {
          if (id === card.id && card.click === false) {
            card.click = true;
            this.setState({Clicked : false});
            this.handleIncrement();
          } else if (id === card.id && card.click === true) {
            if (this.state.currentScore > this.state.highScore){
                this.setState({highScore : this.state.currentScore});
            }
            this.setState({currentScore : 0});
            this.setState({Clicked : true});
            this.state.cards.forEach(card => (card.click = false));
            console.log(this.state.cards); 
          }
      });
    };

    handleIncrement = () => {
        this.setState({ currentScore : this.state.currentScore + 1});
    };

    shuffleArray = () => {
        const shuffleArr = this.shuffle(this.state.cards);
        this.setState({shuffleArr});
    };


    shuffle = array => {
        var currentIndex = array.length,
          tempVal,
          randomIndex;

        while (0 !== currentIndex){
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          tempVal = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = tempVal;
        }
        return array;
    };


    render() {
        return (
          <div>
            <Header
            currentScore={this.state.currentScore}
            highScore={this.state.highScore}
            />
            <div className="content">
            {this.state.cards.map(card => ( 
                <Card
                 Clicked = {this.state.Clicked}
                 handleClick={this.handleClick}
                 name={card.name}
                 key={card.id}
                 img={card.img}
                 id={card.id}
                />
            ))}
            </div>
          </div> 
        );
    }
};


export default Content;