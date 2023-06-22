import React, { Component } from "react";

class Flip extends Component {
  static defaultProps = {
    title: "Let's flip a coin",
  };

  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      headSide: 0,
      tailSide: 0,
      randomSide: <img src='../images/flip0.jpg' alt='Coin-head' />,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipBtn() {
    let randomSide = Math.floor(Math.random() * 2);
    this.setState((prevState) => ({
      total: prevState.total + 1,
    }));

    if (randomSide === 0) {
      this.setState((prevState) => ({
        headSide: prevState.headSide + 1,
        randomSide: <img src='../images/flip0.jpg' alt='Coin-head' />,
      }));
    } else {
      this.setState((prevState) => ({
        tailSide: prevState.tailSide + 1,
        randomSide: <img src='../images/flip1.jpg' alt='Coin-head' />,
      }));
    }
  }

  handleClick() {
    this.flipBtn();
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {/* <h1>Let's flip a coin</h1> */}
        <div className='Coin-container'>{this.state.randomSide}</div>
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>
          Out of {this.state.total} flips, there have been {this.state.headSide}
          heads and {this.state.tailSide} tails.
        </p>
      </div>
    );
  }
}

export default Flip;
