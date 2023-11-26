import React from 'react'
import './Header.css'
import  People  from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Unleash the Power of GPT-3 </h1>
        <p>Welcome to our GPT-3-powered UI website! We are excited to showcase the incredible capabilities of OpenAI's groundbreaking language model, GPT-3. Our website has been carefully crafted to provide a seamless and intuitive user experience, made possible by harnessing the power of GPT-3's natural language processing.</p>
        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={People} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
    </div>
  )
}

export default Header