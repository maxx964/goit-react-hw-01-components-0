import React from 'react';

import styles from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h1 className={styles.h1}>Please leave feedback</h1>
      {options.map(option => (
        <button className={styles.button} key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;