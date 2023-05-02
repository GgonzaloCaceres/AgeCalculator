import style from './DateInput.module.css'
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
  const { Label, PlaceHolder } = DATE_INPUT_TYPES[type]
    ? DATE_INPUT_TYPES[type]
    : {}

  const handleChange = event => {
    setInputValue(event.target.value)
    console.log(event.target.name)
  }
  return (
    <div className={style.inputCombo}>
      <label htmlFor="dateImport">{Label}</label>
      <input
        name={Label}
        id="dateImport"
        type="text"
        placeholder={PlaceHolder}
        onChange={handleChange}
        value={inputValue}
      ></input>
      <span></span>
    </div>
  )
}

export default DateInput
