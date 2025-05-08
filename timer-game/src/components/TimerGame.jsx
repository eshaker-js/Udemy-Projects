import { useState } from 'react'

export default function TimerGame({ title, targetTime }) {
  const [timerStatus, setTimerStatus] = useState(false)
  const [timerExpired, setTimerExpired] = useState(false)

  function handleStarTimer() {
    setTimeout(() => {
      setTimerExpired(true)
    }, targetTime * 1000)
    setTimerStatus(() => (timerStatus ? false : true))
  }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      <p className='challenge-time'>
        {targetTime} second {targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStarTimer}>
          {timerStatus ? 'Stop' : 'Start'}
        </button>
      </p>
      <p className= {timerStatus ? 'active' : ''}>{timerStatus ? 'Timer ticking...' : 'Timer Stopped'}</p>
    </section>
  )
}
