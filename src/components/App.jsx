import React, { Component } from 'react';

import { countTotalFeedback } from './feedbackUtils';
import { countPositiveFeedback } from './positiveFeedbackUtils';
import styles from './App.module.css'

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
    const positive = countPositiveFeedback(good, totalFeedback);

    return (
      <div className={styles.App}>
        <h1 className={styles.h1}>Please leave feedback</h1>
        <button className={styles.button} onClick={() => this.handleFeedback('good')}>Good</button>
        <button className={styles.button}onClick={() => this.handleFeedback('neutral')}>Neutral</button>
        <button className={styles.button}onClick={() => this.handleFeedback('bad')}>Bad</button>

        <h2 className={styles.h2}>Statistics</h2>
        <p className={styles.p}>Good: {good}</p>
        <p className={styles.p}>Neutral: {neutral}</p>
        <p className={styles.p}>Bad: {bad}</p>
        <p className={styles.p}>Total: {totalFeedback}</p>
        <p className={styles.p}>Positive feedback: {positive}%</p>
      </div>
    );
  }
}

export default App;
