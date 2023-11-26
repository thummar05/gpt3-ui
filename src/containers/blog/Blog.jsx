import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './Blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Unleashing the Power of GPT-3" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Exploring the Applications of GPT-3 Across Industries" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Demystifying GPT-3: Understanding the Technology Behind the AI Model" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="The Future of GPT-3" />
      </div>
    </div>
  </div>
);

export default Blog;