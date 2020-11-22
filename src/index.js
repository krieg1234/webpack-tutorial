import Post from '@models/Post';
import '@/styles/style.css'
import json from '@/assets/json.json'
import ImgPNG from '@/assets/long_sliv.png'
import xml from '@/assets/data.xml';
import * as $ from 'jquery';

const post = new Post('Webpack Post Title', ImgPNG);

console.log('Post to String', post.toString());
$('pre').addClass('code').html(post.toString());

console.log('JSON:', json);

console.log('xml:', xml);