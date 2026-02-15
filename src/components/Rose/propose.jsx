import React, { useState } from 'react'
import Chocolate from './chocolate'
import AnimatedSwitch from '../AnimatedSwitch'
import './rose.css'
const Propose = () => {
  const [choco, setChoco] = useState(false)

  // A cute anime proposal/heart sticker
  const proposeGif =
    'https://tenor.com/view/happy-propose-day-romantic-mood-loveyou-proposing-iniya-naal-munmozhiya-gif-13520012734212108309.gif'

  return (
    <>
      <AnimatedSwitch animationKey={choco ? 'propose' : 'rose'}>
        {choco ? (
          <Chocolate />
        ) : (
          <div className='romantic-card anime-entry'>
            <div className='gif-container'>
              <img
                src={proposeGif}
                alt='Cute Propose Anime'
                className='floating-gif'
              />
            </div>

            <h1 className='title'>Happy Propose Day! 💍</h1>

            <div className='message-box'>
              <p>
                They say life isn't an anime, but every moment with you feels
                like a beautiful scripted dream. ✨
              </p>
              <p className='highlight'>
                Will you keep making my life colorful forever? ❤️
              </p>
            </div>

            <button
              type='button'
              className='explore-btn'
              onClick={() => setChoco(true)}
            >
              I have something sweet for you... 🍫
            </button>
          </div>
        )}
      </AnimatedSwitch>
    </>
  )
}

export default Propose
