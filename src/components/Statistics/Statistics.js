import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad,total,positivePercentage }) => {
  return (
    <div>
      <p className={styles.p}>Good: {good}</p>
      <p className={styles.p}>Neutral: {neutral}</p>
      <p className={styles.p}>Bad: {bad}</p>
      <p className={styles.p}>Total: {total}</p>
      <p className={styles.p}>Positive Feedback Percentage: {positivePercentage.toFixed(0)}%</p>
    </div>
  );
};


export default Statistics;

