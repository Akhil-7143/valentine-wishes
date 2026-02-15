import { useState } from 'react'
import Kiss from './kiss'
import './rose.css'
import AnimatedSwitch from '../AnimatedSwitch'

export default function Hug() {
  const [more, setMore] = useState(false)

  // 🤗 Cute anime hug GIF
  const animeGif =
    'https://tenor.com/view/love-hug-love-couple-gif-22965996.gif'

  return (
    <div className='rose-page'>
      <AnimatedSwitch animationKey={more ? 'propose' : 'rose'}>
        {more ? (
          <Kiss />
        ) : (
          <div className='romantic-card'>
            {/* 🤗 Anime Sticker */}
            <div className='gif-container'>
              <img src={animeGif} alt='Anime Hug' className='floating-gif' />
            </div>

            <h1 className='title'>Happy Hug Day, Chinni 🤗</h1>

            <div className='message-box'>
              <p>
                If I could, I would hold you close right now and never let go…
                because in your hug I find my peace, my comfort, and my home
                😌❤️.
              </p>

              <p className='highlight'>
                Some hugs speak louder than words — and my heart is always
                hugging you.
              </p>
            </div>

            <button
              type='button'
              className='explore-btn'
              onClick={() => setMore(true)}
            >
              Click for next feeling... ✨
            </button>
          </div>
        )}
      </AnimatedSwitch>
    </div>
  )
}
