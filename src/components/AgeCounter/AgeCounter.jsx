import styles from './AgeCounter.module.css'
import CountersArea from '../CountersArea/CountersArea'
import DateInput from '../DateInput/DateInput'
import useCalculator from '../../hooks/useCalculator'

const AgeCounter = () => {
  const { passedTime, handleCalculation } = useCalculator()

  return (
    <div className={styles.AgeCounter}>
      <div className={styles.block}></div>
      <div className={styles.effect}></div>
      <main>
        <form
          id="dateForm"
          className={styles.InputsArea}
          onSubmit={handleCalculation}
        >
          <DateInput type="Day"></DateInput>
          <DateInput type="Month"></DateInput>
          <DateInput type="Year"></DateInput>
        </form>
        <section className={styles.buttonSection}>
          <button type="submit" form="dateForm">
            <img src="./icon-arrow.svg"></img>
          </button>
        </section>
        <CountersArea date={passedTime}></CountersArea>
      </main>
    </div>
  )
}

export default AgeCounter
