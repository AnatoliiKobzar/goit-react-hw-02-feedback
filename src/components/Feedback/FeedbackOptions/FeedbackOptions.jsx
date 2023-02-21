import React from 'react';
import PropTypes from 'prop-types';
import { Button, Wrap } from './Feedback.styles';

export const FeedbackOptions = ({
  onLeaveFeedback: { good, neutral, bad },
}) => {
  return (
    <Wrap>
      <Button type="button" onClick={good}>
        Good
      </Button>
      <Button type="button" onClick={neutral}>
        Neutral
      </Button>
      <Button type="button" onClick={bad}>
        Bad
      </Button>
    </Wrap>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
  }).isRequired,
};
