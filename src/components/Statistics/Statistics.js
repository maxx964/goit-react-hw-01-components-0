import React from 'react';

import Notification from '../Notification/Notification';
import styles from './Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      {total > 0 ? (
        <div>
          <h2 className={styles.h2}>Statistics</h2>
          <p className={styles.p}>Good: {good}</p>
          <p className={styles.p}>Neutral: {neutral}</p>
          <p className={styles.p}>Bad: {bad}</p>
          <p className={styles.p}>Total: {total}</p>
          <p className={styles.p}>Positive Feedback Percentage: {positivePercentage}%</p>
        </div>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};

export default Statistics;

