import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import _ from 'underscore';
import { getAllImages } from './Action.js';

class CarouselSlider extends  React.Component{
  constructor(props) {
       super(props);

   }
  componentDidMount() {
        const { dispatch, records, sort_stats} = this.props;
        dispatch(getAllImages())
    }
  render() {
   const {loadedPinterestImages} = this.props;
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:1
    };
    return (
      <div>
          <h1>Pinterest Carousel </h1>
          {
            (!_.isEmpty(loadedPinterestImages)) ?
              (<Slider {...settings}>
              {
                loadedPinterestImages.map(function(image){
                return(
                  <div>
                    <img src={image.image.original.url}/>
                  </div>)
                  })
                }
              </Slider>
            ):
            (<div className="loading">Loading.........</div>)
        }
    </div>
    );
  }
}

function mapStateToProps(state) {
    const { loadedPinterestImages} = state;

    return {
        loadedPinterestImages:state.loadedPinterestImages
    }
}
export default connect(mapStateToProps)(CarouselSlider)
