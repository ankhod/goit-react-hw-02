import styles from './Feedback.module.css';

export default function Feedback({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div className={styles.feedback}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
