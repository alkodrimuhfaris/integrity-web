import React from 'react';
import {BsChevronDoubleRight, BsChevronDoubleLeft} from 'react-icons/bs';
import SliderTrack from './SliderTrack';
import {services} from '../../../../dto/global';
import useCarousel from '../../../../Hooks/useCarousel';

export default function ServiceSlider() {
  const {
    carouselArray,
    carouselNum,
    transition,
    disableBtn,
    sliderFunc,
    dotBtn: _dotbtn,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    onTransitionEnd,
  } = useCarousel({carousel: services});
  return (
    <div className="service-slider">
      <div className="container-slider">
        <button
          type="button"
          disabled={disableBtn}
          onClick={() => sliderFunc('prev')}
          className="slider-btn prev"
        >
          <BsChevronDoubleLeft />
        </button>
        <div className="slider-display">
          <SliderTrack
            services={carouselArray}
            carouselNum={carouselNum}
            transition={transition}
            onTransitionEnd={onTransitionEnd}
            onTouchMove={handleTouchMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />
        </div>
        <button
          type="button"
          disabled={disableBtn}
          onClick={() => sliderFunc('next')}
          className="slider-btn next"
        >
          <BsChevronDoubleRight />
        </button>
      </div>
    </div>
  );
}
