import React from 'react';
import Feature from '../../components/feature/Feature';
import './WhatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, which stands for 'Generative Pre-trained Transformer 3,' is an advanced language model developed by OpenAI. It represents the third iteration of the GPT series and is renowned for its remarkable natural language processing capabilities. GPT-3 is built upon a deep learning architecture known as a transformer, which enables it to understand and generate human-like text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3 enables chatbots to engage in more human-like and meaningful conversations with users." />
      <Feature title="Knowledgebase" text="GPT-3 is exposed to vast amounts of text from books, articles, websites, and other sources available on the internet. " />
      <Feature title="Education" text="OpenAI Documentation,Research Papers and Publications,Online Courses and Tutorials,Developer Communities and Forums ,etc.you can explore educational resources and engage in practical hands-on experiences." />
    </div>
  </div>
);

export default WhatGPT3;