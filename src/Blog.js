import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Blog.css';

import Home from './pages/home';
import About from './pages/about';
import Categories from './pages/categories';
import Post from './pages/post';
import Write from './pages/write';

require('dotenv').config();

const Blog = () => {
  return (
    <div className='Blog'>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/category/:categoryUrl' component={Categories} />
          <Route path='/post/:postId' component={Post} />
          <Route path='/write' component={Write} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Blog;
