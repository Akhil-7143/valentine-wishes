import { useState } from 'react'
import Shivarathri from './shivarathri'
import AnimatedSwitch from '../AnimatedSwitch'
import './rose.css'

export default function Valentine() {
  const [more, setMore] = useState(false)

  // ❤️ Anime romantic GIF
  const animeGif =
    'https://tenor.com/view/happy-valentines-day-happy-valentines-day-love-valentines-day-i-love-you-relationship-gif-15053000770070231372.gif'

  return (
    <div className='rose-page'>
      <AnimatedSwitch animationKey={more ? 'propose' : 'rose'}>
        {more ? (
          <Shivarathri />
        ) : (
          <div className='romantic-card'>
            {/* ❤️ Anime Sticker */}
            <div className='gif-container'>
              <img src={animeGif} alt='Anime Love' className='floating-gif' />
            </div>

            <h1 className='title'>Happy Valentine's Day, Chinni ❤️</h1>

            <div className='message-box'>
              <p>
                Loving you feels like finding a place where my heart finally
                understands what happiness means. You make ordinary moments feel
                magical, and even silence with you feels warm and complete. I
                don’t know what I did to deserve someone as beautiful as you,
                but I promise to always care for you, support you, and love you
                with all that I am. With you, every heartbeat feels softer,
                every smile feels brighter, and every day feels worth living
                😌❤️.
              </p>

              <p className='highlight'>
                No matter where life takes us, I promise my heart will always
                choose you again and again ❤️.
              </p>
            </div>

            <button
              type='button'
              className='explore-btn'
              onClick={() => setMore(true)}
            >
              One more surprise... ✨
            </button>
          </div>
        )}
      </AnimatedSwitch>
    </div>
  )
}
