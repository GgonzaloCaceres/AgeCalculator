import style from './Counter.module.css'

const Counter = ({ message = '--', value = '--' }) => {
  return (
    <article className={style.counter}>
      <p className={style.numbers}>{value}</p>
      <span className={style.message}>{message}</span>
    </article>
  )
}

export default Counter
