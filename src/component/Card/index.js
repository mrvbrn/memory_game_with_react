import React from "react";
import "./Card.css";


class Card extends React.Component {
  render() {
    return (
      <div className={"card" + (this.props.Clicked? "animate":"")} onClick={() => this.props.handleClick( this.props.id)} >
          <div className="img-content" >
            {this.props.name}
          </div>
          <div className="img-container">
            <img src={this.props.img} alt={this.props.name} widht="180px" height="180px"/>
          </div>
      </div>
    );
  }
}

export default Card;