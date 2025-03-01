import styles from './Options.module.css';

export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={resetFeedback} className={styles.reset}>
          Reset
        </button>
      )}
    </div>
  );
}
