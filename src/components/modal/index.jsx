import { useState } from 'react'
import './index.css'
import Saidno from '../saidno/index'
import YesCard from '../said-yes'
import AnimatedSwitch from '../AnimatedSwitch'

export default function Modal() {
  const [saidno, setSaidno] = useState(false)
  const [yes, setYes] = useState(false)

  let content

  if (saidno) {
    content = <Saidno saidno={saidno} setSaidno={setSaidno} />
  } else if (yes) {
    content = <YesCard />
  } else {
    content = (
      <div>
        <h1>
          Hey Chinni 😌✨
          <br />
          Something special is waiting for you...
          <br />
          Ready to start our little love journey? ❤️
        </h1>

        <div className='button-card'>
          <button onClick={() => setYes(true)}>Yes 😍</button>
          <button onClick={() => setSaidno(true)}>No 🙈</button>
        </div>
      </div>
    )
  }

  return (
    <div className='modal-card'>
      <AnimatedSwitch animationKey={yes ? 'yes' : saidno ? 'no' : 'start'}>
        {content}
      </AnimatedSwitch>
    </div>
  )
}
