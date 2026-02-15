import { useState } from 'react'
import '../Rose/rose.css'
export default function Saidno({ saidno, setSaidno }) {
  console.log(saidno)

  return (
    <div className='card'>
      <h3>
        Are you sure you clicked NO? 🥺
        <br />
        My heart says you meant YES 😌❤️
        <br />
        Go back and make the love story continue...
      </h3>

      <p>
        <button type='button' className='back-btn' onClick={() => setSaidno(!saidno)}>
          Back..
        </button>
      </p>
    </div>
  )
}
