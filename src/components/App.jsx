import React, { Component } from 'react';

import { countTotalFeedback } from './feedbackUtils/feedbackUtils';
import { countPositiveFeedback } from './positiveFeedbackUtils/positiveFeedbackUtils';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedback(good, totalFeedback);

    return (
      <div>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
        <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positivePercentage} />
      </div>
    );
  }
}

export default App;
