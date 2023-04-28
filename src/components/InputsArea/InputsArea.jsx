import DateInput from '../DateInput/DateInput'
import style from './InputsArea.module.css'

const InputsArea = () => (
  <form className={style.InputsArea}>
    <DateInput type="Day"></DateInput>
    <DateInput type="Month"></DateInput>
    <DateInput type="Year"></DateInput>
    <section className={style.button}>
      <button type="submit">
        <img src="./icon-arrow.svg"></img>
      </button>
    </section>
  </form>
)
export default InputsArea
