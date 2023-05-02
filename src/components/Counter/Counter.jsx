import style from './Counter.module.css'

const Counter = ({ message = '--', value = '--' }) => {
  return (
    <article className={style.Counter}>
      <p className={style.Numbers}>{value}</p>
      <span className={style.Message}>{message}</span>
    </article>
  )
}

export default Counter
