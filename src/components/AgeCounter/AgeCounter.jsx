import CountersArea from '../CountersArea/CountersArea'
import InputsArea from '../InputsArea/InputsArea'
import styles from './AgeCounter.module.css'

const AgeCounter = () => {
  return (
    <div className={styles.AgeCounter}>
      <main>
        <InputsArea> </InputsArea>
        <section className={styles.button}>
          <div>
            <img src="./icon-arrow.svg"></img>
          </div>
        </section>
        <CountersArea></CountersArea>
      </main>
    </div>
  )
}

export default AgeCounter
