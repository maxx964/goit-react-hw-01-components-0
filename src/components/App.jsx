import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

   handleFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

    

   render() {
    const { good, neutral, bad } = this.state;

    return (
    <div>
  <Section title="Please leave feedback">
    <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleFeedback} />
  </Section>

  <Section title="Statistics">
    {good + neutral + bad === 0 ? (
      <Notification message="There is no feedback" />
    ) : (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={good + neutral + bad}
        positivePercentage={(good / (good + neutral + bad)) * 100}
      />
    )}
  </Section>
</div>
    );
  }
}


export default App;