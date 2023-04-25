import DateInput from '../DateInput/DateInput'
import styles from './InputsArea.module.css'

const InputsArea = () => (
  <div>
    <DateInput type="Day"></DateInput>
    <DateInput type="Month"></DateInput>
    <DateInput type="Year"></DateInput>
  </div>
)
export default InputsArea
