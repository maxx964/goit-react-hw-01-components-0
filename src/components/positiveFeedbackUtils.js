export const countPositiveFeedback = (good, totalFeedback) => {
  return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
};
