import React from 'react';
import scrollToElement from '../../../../../Helpers/scrollToElement';
import Title from '../../../../ComponentLayout/Title';
import ServiceCards from './ServiceCards';
// import ServiceSlider from './ServiceSlider';

export default function OurService() {
  const {refScroll} = scrollToElement({hashElement: '#service'});
  return (
    <div ref={refScroll} className="our-service pt-2">
      <Title title="Service" />
      {/* <ServiceSlider /> */}
      <ServiceCards />
    </div>
  );
}
