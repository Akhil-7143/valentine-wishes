import { useState } from 'react'
import Valentine from './valentine'
import AnimatedSwitch from '../AnimatedSwitch'
import './rose.css'

export default function Kiss() {
  const [more, setMore] = useState(false)

  // 💋 Cute anime romantic GIF
  const animeGif = 'https://tenor.com/view/kiss-hug-gif-20628113.gif'

  return (
    <div className='rose-page'>
      <AnimatedSwitch animationKey={more ? 'propose' : 'rose'}>
        {more ? (
          <Valentine />
        ) : (
          <div className='romantic-card'>
            {/* 💋 Anime Sticker */}
            <div className='gif-container'>
              <img src={animeGif} alt='Anime Kiss' className='floating-gif' />
            </div>

            <h1 className='title'>Happy Kiss Day, Chinni 💋</h1>

            <div className='message-box'>
              <p>
                A kiss is not just a moment… <br />
                it's a feeling where words stop and hearts speak softly 😌❤️.
              </p>

              <p className='highlight'>
                Every time I think about you, my heart sends a thousand
                invisible kisses.
              </p>
            </div>

            <button
              type='button'
              className='explore-btn'
              onClick={() => setMore(true)}
            >
              Click for the final surprise... ✨
            </button>
          </div>
        )}
      </AnimatedSwitch>
    </div>
  )
}
