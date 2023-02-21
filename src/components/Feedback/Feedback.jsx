import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 15,
    neutral: 14,
    bad: 1,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <section>
        <h1>Please leave feeedback</h1>
        <button type="button">Good</button>
        <button type="button">Neutral</button>
        <button type="button">Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>
          Positive feedback: {this.countPositiveFeedbackPercentage().toFixed(1)}
          %
        </p>
      </section>
    );
  }
}

export default Feedback;
