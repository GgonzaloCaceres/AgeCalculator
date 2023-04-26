import Counter from '../Counter/Counter'
import styles from './CountersArea.module.css'

const CountersArea = () => {
  return (
    <section className={styles.CountersArea}>
      <Counter message="years"></Counter>
      <Counter message="months"></Counter>
      <Counter message="days"></Counter>
    </section>
  )
}

export default CountersArea
