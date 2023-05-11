import styles from './AgeCounter.module.css'
import CountersArea from '../CountersArea/CountersArea'
import DateInput from '../DateInput/DateInput'
import useCalculator from '../../hooks/useCalculator'
import { useCalculatorForm } from '../../hooks/useCalculatorForm'

const AgeCounter = () => {
  const { passedTime, handleCalculation } = useCalculator()
  const {
    day,
    month,
    year,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    hasValidationError
  } = useCalculatorForm()

  const isButtonEnabled =
    hasValidationError ||
    day.value.trim() === '' ||
    month.value.trim() === '' ||
    year.value.trim() === ''

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
          <DateInput
            label="DAY"
            placeholder="DD"
            value={day.value}
            onChange={({ target: { value } }) => handleDayChange(value)}
            errorMessage={day.error}
            autoFocus
            type="Day"
          ></DateInput>
          <DateInput
            label="MONTH"
            placeholder="MM"
            value={month.value}
            onChange={({ target: { value } }) => handleMonthChange(value)}
            errorMessage={month.error}
            type="Month"
          ></DateInput>
          <DateInput
            label="YEAR"
            placeholder="YYYY"
            value={year.value}
            onChange={({ target: { value } }) => handleYearChange(value)}
            errorMessage={year.error}
            type="Year"
          ></DateInput>
        </form>
        <section className={styles.buttonSection}>
          <button disabled={isButtonEnabled} type="submit" form="dateForm">
            <img src="./icon-arrow.svg"></img>
          </button>
        </section>
        <CountersArea date={passedTime}></CountersArea>
      </main>
    </div>
  )
}

export default AgeCounter
