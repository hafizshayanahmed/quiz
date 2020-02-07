import React from 'react';
import './App.css';
import Quiz from "./components/quiz";
import Questions from "./components/data.json"
import Loader from "./components/loader"
import Star from "./components/star"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      con: true,
      i: 0,
      percentage: 0,
      correctAnswer: 0,
    }
  }

  counter() {
    this.setState({
      i: this.state.i + 1
    })
  }

  ansCounter() {
    this.setState({
      correctAnswer: this.state.correctAnswer + 1,
      percentage: (this.state.correctAnswer + 1) * 5
    })
  }

  next() {
    this.setState({
      i: this.state.i + 1
    })
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <div style={{ width: "50%", margin: "0 auto" }}>
          <div>
            <Loader percentage={(this.state.i + 1) * 5} strokeWidth="2" strokeColor="grey" trailWidth="2" trailColor="lightgrey" />
          </div>
          <div>
            <p>Question {this.state.i + 1} of {Questions.length}</p>
          </div>
          <div>
            <Star question={Questions[this.state.i]} />
          </div>
          <br />
          <div>
            <Quiz questions={Questions[this.state.i]} counter={() => this.counter()} ansCounter={() => this.ansCounter()} length={Questions.length} /> <br />
          </div>
          <div>
            <p>Score: {this.state.percentage} %</p>
            <Loader
              percentage={this.state.percentage}
              strokeWidth="4"
              strokeColor="grey"
              trailWidth="4"
              trailColor="lightgrey"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;