import CountersArea from '../CountersArea/CountersArea'
import InputsArea from '../InputsArea/InputsArea'
import styles from './AgeCounter.module.css'

const AgeCounter = () => {
  return (
    <div className={styles.AgeCounter}>
      <InputsArea> </InputsArea>
      <CountersArea></CountersArea>
    </div>
  )
}

export default AgeCounter
