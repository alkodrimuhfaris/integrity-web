import React from 'react';
import useComponentWidth from '../../../Helpers/useComponentWidth';
import Slider from './Slider';

export default function SliderTrack({
  transition,
  carouselNum = 0,
  services = [],
  handleTouchStart = () => {},
  handleTouchMove = () => {},
  handleTouchEnd = () => {},
  onTransitionEnd = () => {},
}) {
  const [ref1, wRef1, _hRef1] = useComponentWidth();
  return (
    <div
      style={{
        transition,
        transform: `translate(-${carouselNum * wRef1}px, 0px)`,
      }}
      onTransitionEnd={onTransitionEnd}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="slider-track"
    >
      {services.map((val, idx) => (
        <Slider val={val} key={idx} idx={idx} ref1={ref1} wRef1={wRef1} />
      ))}
    </div>
  );
}
