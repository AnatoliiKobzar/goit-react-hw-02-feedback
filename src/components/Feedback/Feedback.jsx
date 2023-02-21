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

  addGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  addNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  addBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
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
          onLeaveFeedback={{
            good: this.addGoodFeedback,
            neutral: this.addNeutralFeedback,
            bad: this.addBadFeedback,
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
