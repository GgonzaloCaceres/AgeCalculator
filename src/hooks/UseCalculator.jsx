import { useState } from 'react'

const useCalculator = () => {
  const [passedTime, setPassedTime] = useState({
    YEAR: '--',
    MONTH: '--',
    DAY: '--'
  })

  const handleCalculation = event => {
    event.preventDefault()

    const inputValues = {
      Day: event.target.DAY.value,
      Month: event.target.MONTH.value,
      Year: event.target.YEAR.value
    }

    const givenDate = new Date(
      [inputValues.Year] + '-' + [inputValues.Month] + '-' + [inputValues.Day]
    )

    const currentDate = new Date()
    const timeDiff = Math.abs(currentDate.getTime() - givenDate.getTime())
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25))
    const months = Math.floor((timeDiff / (1000 * 60 * 60 * 24 * 30.44)) % 12)
    const monthsPassedInDays = Math.ceil(
      Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30.44)) * 30.44
    )
    const daysPassed = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))

    const days =
      months === 0
        ? daysPassed - monthsPassedInDays
        : Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30.44)

    setPassedTime({ years, months, days })
  }

  const handleValidation = (value, Label) => {
    if (
      Label === 'YEAR' &&
      (value.length !== 4 || value < 1000 || value > 9999)
    ) {
      return 'Incorrect year value'
    }
    if (Label === 'MONTH' && (value.length > 2 || value < 1 || value > 12)) {
      return 'Incorrect month value'
    }
    if (Label === 'DAY' && (value.length > 2 || value < 1 || value > 31)) {
      return 'Incorrect day value'
    }
    return ''
  }

  return { passedTime, handleCalculation, handleValidation }
}

export default useCalculator
