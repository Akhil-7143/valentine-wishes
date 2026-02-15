import { useState } from 'react'
import './index.css'
import RoseComponent from '../Rose/rose'

export default function YesCard() {
  const [click, setClick] = useState(false)

  return (
    <div className='yes-card'>
      {click ? (
        <RoseComponent />
      ) : (
        <>
          <h2>Yayyy 😍 You said YES!</h2>

          <h1>Thank you my dear Chinni ❤️</h1>

          <h3>
            You just made my heart smile a little bigger today 😌✨. Now our
            little love story begins...
          </h3>

          <h4 className='happy-text'>
            Warning ⚠️: From here, things may get more cute, romantic and full
            of surprises 😏💖.
          </h4>

          <button className='click-btn' onClick={() => setClick(true)}>
            Start our story... 🌸
          </button>
        </>
      )}
    </div>
  )
}
