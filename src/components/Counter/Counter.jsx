import style from './Counter.module.css'

const Counter = ({ message = '--' }) => {
  return (
    <article className={style.Counter}>
      <p className={style.Numbers}>--</p>
      <span className={style.Message}>{message}</span>
    </article>
  )
}

export default Counter
