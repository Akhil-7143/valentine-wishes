import { useState } from 'react'
import Hug from './hug'
import './rose.css'
import AnimatedSwitch from '../AnimatedSwitch'

export default function Promise() {
  const [more, setMore] = useState(false)

  // 💖 Anime romantic sticker
  const animeGif =
    'https://tenor.com/view/te-lo-prometo-promise-heart-love-i-promise-you-gif-16040149.gif'

  return (
    <div className='rose-page'>
      <AnimatedSwitch animationKey={more ? 'propose' : 'rose'}>
        {more ? (
          <Hug />
        ) : (
          <div className='romantic-card'>
            {/* 💖 Anime Sticker */}
            <div className='gif-container'>
              <img
                src={animeGif}
                alt='Anime Promise'
                className='floating-gif'
              />
            </div>

            <h1 className='title'>Happy Promise Day, Chinni 💍</h1>

            <div className='message-box'>
              <p>
                I may not be perfect, but I promise to always try my best to
                make you smile, to stand beside you, and to love you a little
                more every day 😌❤️.
              </p>

              <p className='highlight'>
                My promise is simple — no matter what happens, I will always
                choose you.
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
