import styles from './AgeCounter.module.css'
import CountersArea from '../CountersArea/CountersArea'
import DateInput from '../DateInput/DateInput'

const AgeCounter = () => {
  return (
    <div className={styles.AgeCounter}>
      <main>
        <form id="dateForm" className={styles.InputsArea}>
          <DateInput type="Day"></DateInput>
          <DateInput type="Month"></DateInput>
          <DateInput type="Year"></DateInput>
        </form>
        <section className={styles.buttonSection}>
          <button type="submit" form="dateForm">
            <img src="./icon-arrow.svg"></img>
          </button>
        </section>
        <CountersArea></CountersArea>
      </main>
    </div>
  )
}

export default AgeCounter
