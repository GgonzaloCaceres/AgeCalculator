import { useState } from 'react'

export const useCalculatorForm = () => {
  const [hasValidationError, setHasValidationError] = useState(false)

  const [{ day, month, year }, setInputsState] = useState({
    day: {
      value: '',
      error: ''
    },
    month: {
      value: '',
      error: ''
    },
    year: {
      value: '',
      error: ''
    }
  })

  const handleDayChange = value => {
    const error =
      value.length > 2 || value < 1 || value > 31 ? 'Incorrect day value' : ''
    setHasValidationError(!!error)
    setInputsState(lastValue => ({
      ...lastValue,
      day: {
        value,
        error
      }
    }))
  }

  const handleMonthChange = value => {
    const error =
      value.length > 2 || value < 1 || value > 12 ? 'Incorrect month value' : ''
    setHasValidationError(!!error)
    setInputsState(lastValue => ({
      ...lastValue,
      month: {
        value,
        error
      }
    }))
  }

  const handleYearChange = value => {
    const currentYear = new Date().getFullYear()
    const error =
      value.length !== 4 || value < 1000 || value > currentYear
        ? 'Incorrect year value'
        : ''
    setHasValidationError(!!error)
    setInputsState(lastValue => ({
      ...lastValue,
      year: {
        value,
        error
      }
    }))
  }

  return {
    day,
    month,
    year,
    handleDayChange,
    handleMonthChange,
    handleYearChange,
    hasValidationError
  }
}
