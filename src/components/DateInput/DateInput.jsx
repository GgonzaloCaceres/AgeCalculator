import styles from './DateInput.module.css'

const DateInput = ({ type }) => {
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

  const { Label, PlaceHolder } = DATE_INPUT_TYPES[type]
    ? DATE_INPUT_TYPES[type]
    : {}
  return (
    <>
      <label htmlFor="dateImport">{Label}</label>
      <input id="dateImport" placeholder={PlaceHolder}></input>
      <span></span>
    </>
  )
}

export default DateInput
