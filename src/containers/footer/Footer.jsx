import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import './Footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href='#home'>Request Early Access</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Ahemedabad,India <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        
        <ul>Social Media</ul>
        <li><a href='https://www.linkedin.com/in/raj-thummar-401813231/'>LinkedIn</a></li>
        <li><a href='https://www.linkedin.com/in/raj-thummar-401813231/'>Instagram</a></li>
        <li><a href='https://www.linkedin.com/in/raj-thummar-401813231/'>Facebook</a></li>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p><a href='https://www.linkedin.com/in/raj-thummar-401813231/'>Raj Thummar</a></p>
        <p>085-132567</p>
        <p>rajdvlpr@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;