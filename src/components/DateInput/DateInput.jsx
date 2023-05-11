import style from './DateInput.module.css'

const DateInput = ({ type, label, errorMessage, ...props }) => {
  return (
    <div className={style.inputCombo}>
      <label htmlFor="dateImport">{label}</label>
      <input
        autoComplete="off"
        name={label}
        id="dateImport"
        {...props}
        type="number"
      ></input>
      <span className={style.errorMessage}>{errorMessage}</span>
    </div>
  )
}

export default DateInput
