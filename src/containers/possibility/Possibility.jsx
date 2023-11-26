import React from 'react'
import './Possibility.css'
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage}  alt='possibility'/>
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>The possibilities and imagination of GPT-3 are vast, and while some of these ideas are speculative, they showcase the potential directions that future developments could take.</p>
        <h4>
        Request Early Access to Get Started
        </h4>
      </div>
    </div>
  )
}

export default Possibility;