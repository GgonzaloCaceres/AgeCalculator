import DateInput from '../DateInput/DateInput'
import style from './InputsArea.module.css'

const InputsArea = () => (
  <div className={style.InputsArea}>
    <DateInput type="Day"></DateInput>
    <DateInput type="Month"></DateInput>
    <DateInput type="Year"></DateInput>
  </div>
)
export default InputsArea
