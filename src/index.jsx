import Post from '@models/Post';
import babel from './babel'
import '@/styles/style.css';
import '@/styles/less.less';
import '@/styles/scss.scss';
import json from '@/assets/json.json'
import ImgPNG from '@/assets/long_sliv.png'
import xml from '@/assets/data.xml';
import * as $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';

const post = new Post('Webpack Post Title', ImgPNG);

console.log('Post to String', post.toString());
//$('pre').addClass('code').html(post.toString());

console.log('JSON:', json);

console.log('xml:', xml);

const App = () => (
  <div class="container">
    <h1>Webpack tutorial</h1>
    <hr />
    <div class="logo" />
    <hr />
    <pre />
    <hr />
    <div class="box">
      <h2>LESS</h2>
    </div>
    <div class="card">
      <h2>SCSS</h2>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));