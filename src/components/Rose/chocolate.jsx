import { useState } from 'react'
import Teddy from './teddy'
import './rose.css' // reuse same styling
import AnimatedSwitch from '../AnimatedSwitch'

export default function Chocolate() {
  const [teddy, setTeddy] = useState(false)

  // 🍫 Cute anime chocolate GIF (you can change later)
  const animeGif =
    'https://tenor.com/view/valentine-valentines-romance-love-romantic-gif-20297571.gif'

  return (
    <div className='rose-page'>
      <AnimatedSwitch animationKey={teddy ? 'propose' : 'rose'}>
        {teddy ? (
          <Teddy />
        ) : (
          <div className='romantic-card'>
            {/* 🍫 Anime Sticker */}
            <div className='gif-container'>
              <img
                src={animeGif}
                alt='Anime Chocolate'
                className='floating-gif'
              />
            </div>

            <h1 className='title'>Happy Chocolate Day, Chinni 🍫</h1>

            <div className='message-box'>
              <p>
                Just like chocolates make everything sweeter, you make my life
                more special every single day 😌❤️.
              </p>

              <p className='highlight'>
                Every moment with you feels like my favorite sweet memory.
              </p>
            </div>

            <button
              type='button'
              className='explore-btn'
              onClick={() => setTeddy(true)}
            >
              Click for more sweetness... ✨
            </button>
          </div>
        )}
      </AnimatedSwitch>
    </div>
  )
}
