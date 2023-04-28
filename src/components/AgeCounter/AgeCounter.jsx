import CountersArea from '../CountersArea/CountersArea'
import InputsArea from '../InputsArea/InputsArea'
import styles from './AgeCounter.module.css'

const AgeCounter = () => {
  return (
    <div className={styles.AgeCounter}>
      <main>
        <InputsArea> </InputsArea>
        <CountersArea></CountersArea>
      </main>
    </div>
  )
}

export default AgeCounter
