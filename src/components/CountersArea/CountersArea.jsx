import Counter from '../Counter/Counter'
import styles from './CountersArea.module.css'

const CountersArea = ({ date }) => {
  const { DAY, MONTH, YEAR } = date
  return (
    <section className={styles.CountersArea}>
      <Counter value={YEAR} message="years"></Counter>
      <Counter value={MONTH} message="months"></Counter>
      <Counter value={DAY} message="days"></Counter>
    </section>
  )
}

export default CountersArea
