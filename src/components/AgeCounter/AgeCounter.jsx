import styles from './AgeCounter.module.css'
import CountersArea from '../CountersArea/CountersArea'
import DateInput from '../DateInput/DateInput'
import { useState } from 'react'

const AgeCounter = () => {
  const [passedTime, setPassedTime] = useState({
    YEAR: '--',
    MONTH: '--',
    DAY: '--'
  })

  const handleSubmit = event => {
    event.preventDefault()
    const inputsArray = [...event.target].filter(
      element => element.nodeName === 'INPUT'
    )
    const valueObjects = inputsArray.map(input => {
      return { [input.name]: input.value }
    })
    console.log(valueObjects)
    const inputValues = valueObjects.reduce((acc, valueObject) => {
      const key = Object.keys(valueObject)[0]
      acc[key] = valueObject[key]
      return acc
    }, {})

    const givenDate = new Date(
      [inputValues.YEAR] + '-' + [inputValues.MONTH] + '-' + [inputValues.DAY]
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

    setPassedTime({ YEAR: years, MONTH: months, DAY: days })
  }

  // function handleSubmit(event) {
  //   event.preventDefault()
  // }

  return (
    <div className={styles.AgeCounter}>
      <main>
        <form
          id="dateForm"
          className={styles.InputsArea}
          onSubmit={handleSubmit}
        >
          <DateInput type="Day"></DateInput>
          <DateInput type="Month"></DateInput>
          <DateInput type="Year"></DateInput>
        </form>
        <section className={styles.buttonSection}>
          <button type="submit" form="dateForm">
            <img src="./icon-arrow.svg"></img>
          </button>
        </section>
        <CountersArea date={passedTime}></CountersArea>
      </main>
    </div>
  )
}

export default AgeCounter
