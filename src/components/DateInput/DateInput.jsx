import style from './DateInput.module.css'
import useCalculator from '../../hooks/useCalculator'
import { useState } from 'react'

const DATE_INPUT_TYPES = {
  Day: {
    Label: 'DAY',
    PlaceHolder: 'DD'
  },
  Month: {
    Label: 'MONTH',
    PlaceHolder: 'MM'
  },
  Year: {
    Label: 'YEAR',
    PlaceHolder: 'YYYY'
  }
}
const DateInput = ({ type, setter }) => {
  const [inputValue, setInputValue] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const { handleValidation } = useCalculator()
  const { Label, PlaceHolder } = DATE_INPUT_TYPES[type]
    ? DATE_INPUT_TYPES[type]
    : {}

  return (
    <div className={style.inputCombo}>
      <label htmlFor="dateImport">{Label}</label>
      <input
        name={Label}
        id="dateImport"
        type="number"
        placeholder={PlaceHolder}
        onChange={({ target: { value } }) => {
          setInputValue(value)
          setErrorMessage(() => handleValidation(value, Label))
        }}
        value={inputValue}
      ></input>
      <span className={style.errorMessage}>{errorMessage}</span>
    </div>
  )
}

export default DateInput
