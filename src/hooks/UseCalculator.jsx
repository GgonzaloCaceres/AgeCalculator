import { useState } from 'react'

const UseCalculator = () => {
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
  return [passedTime, handleCalculation]
}

export default UseCalculator
