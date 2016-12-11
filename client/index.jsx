import React from 'react';
import ReactDOM from 'react-dom';
import CarouselSlider from './CarouselSlider.jsx';
import { Provider } from 'react-redux';
import  configureStore from './Store.js';
const store = configureStore()
  ReactDOM.render(
    <Provider store={store}>
      <CarouselSlider></CarouselSlider>
      </Provider>,
    document.getElementById("myCarousel")
  );
