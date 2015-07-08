import React from 'react';
import {MasonryGallery} from '../src';
import './style.scss';
import '../src/index.scss';

const images = [
  'orange-butterfly.jpg', 'butterfly-on-yellow-flower.jpg',
  'butterfly-on-petal.jpg', 'albino-butterfly.jpg',
  'blue-butterfly.jpg'].map( filename => `https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/${filename}` );

React.render(<MasonryGallery images={images}/>, document.getElementById('main'));
