import Counter from '../Counter/Counter'
import styles from './CountersArea.module.css'

const CountersArea = ({ date }) => {
  const { days, months, years } = date
  return (
    <section className={styles.CountersArea}>
      <Counter value={years} message="years"></Counter>
      <Counter value={months} message="months"></Counter>
      <Counter value={days} message="days"></Counter>
    </section>
  )
}

export default CountersArea
