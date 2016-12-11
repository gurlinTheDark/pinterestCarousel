import React from 'react';
import ReactDOM from 'react-dom';
import CarouselSlider from './CarouselSlider.jsx';
import { Provider } from 'react-redux';
import  configureStore from './Store.js';
import Slider from 'react-slick';

require('../node_modules/slick-carousel/slick/slick.css');
require('../node_modules/slick-carousel/slick/slick-theme.css');
require('./style.css');

require('./style.css');
const store = configureStore()
  ReactDOM.render(
    <Provider store={store}>
        <CarouselSlider></CarouselSlider>
    </Provider>,
    document.getElementById("myCarousel")
  );
