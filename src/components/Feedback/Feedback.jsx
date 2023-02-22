import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { Section } from './Section/Section';
import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = value => {
    this.setState(prevState => {
      return {
        [value]: prevState[value] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    return (good / this.countTotalFeedback()) * 100;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title={'Please leave feeedback'}>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={event => {
            this.addFeedback(event.target.value);
          }}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default Feedback;
