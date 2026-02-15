import { useState } from 'react'
import Propose from './propose'
import './rose.css'
import AnimatedSwitch from '../AnimatedSwitch'

export default function RoseComponent() {
  const [more, setMore] = useState(false)

  // Example of a transparent anime rose sticker from GIPHY
  const animeGif =
    'https://tenor.com/view/roses-feb-14-bouquet-happy-valentines-day-valentines-day-gif-4795696016183503774.gif'

  return (
    <div className='rose-page'>
      <AnimatedSwitch animationKey={more ? 'propose' : 'rose'}>
        {more ? (
          <Propose />
        ) : (
          <div className='romantic-card'>
            {/* Top Anime Sticker */}
            <div className='gif-container'>
              <img
                src={animeGif}
                alt='Cute Anime Rose'
                className='floating-gif'
              />
            </div>

            <h1 className='title'>Happy Rose Day, Chinni 🌹</h1>

            <div className='message-box'>
              <p>
                Ever since you came into my life, everything feels more
                beautiful… <br />
                like an anime scene where suddenly all the colors become
                brighter 😌❤️.
              </p>
              <p className='highlight'>
                Stay smiling always — because your smile is my favorite scene.
              </p>
            </div>

            <button
              type='button'
              className='explore-btn'
              onClick={() => setMore(true)}
            >
              Click for more magic... ✨
            </button>
          </div>
        )}
      </AnimatedSwitch>
    </div>
  )
}
