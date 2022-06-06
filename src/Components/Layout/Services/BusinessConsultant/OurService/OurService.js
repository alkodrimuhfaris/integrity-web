import React from 'react';
import Title from '../../../../ComponentLayout/Title';
import ServiceCards from './ServiceCards';
// import ServiceSlider from './ServiceSlider';

export default function OurService() {
  return (
    <div className="our-service pt-2">
      <Title title="Service" />
      {/* <ServiceSlider /> */}
      <ServiceCards />
    </div>
  );
}
