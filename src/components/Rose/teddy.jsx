import { useState } from 'react'
import Promise from './promise'
import './rose.css' // reuse same styling
import AnimatedSwitch from '../AnimatedSwitch'

export default function Teddy() {
  const [prom, setProm] = useState(false)

  // 🧸 Cute anime teddy GIF
  const animeGif =
    'https://tenor.com/view/roses-roses-for-you-bouquet-love-rose-gif-4113061568566502205.gif'

  return (
    <div className='rose-page'>
      <AnimatedSwitch animationKey={prom ? 'propose' : 'rose'}>
        {prom ? (
          <Promise />
        ) : (
          <div className='romantic-card'>
            {/* 🧸 Anime Sticker */}
            <div className='gif-container'>
              <img src={animeGif} alt='Anime Teddy' className='floating-gif' />
            </div>

            <h1 className='title'>Happy Teddy Day, Chinni 🧸</h1>

            <div className='message-box'>
              <p>
                Just like a teddy gives warm hugs, <br /> I wish I could hug you
                right now and make you feel safe and loved 😌❤️.
              </p>

              <p className='highlight'>
                You are my comfort, my smile, and my cutest happiness.
              </p>
            </div>

            <button
              type='button'
              className='explore-btn'
              onClick={() => setProm(true)}
            >
              Click for more hugs... ✨
            </button>
          </div>
        )}
      </AnimatedSwitch>
    </div>
  )
}
