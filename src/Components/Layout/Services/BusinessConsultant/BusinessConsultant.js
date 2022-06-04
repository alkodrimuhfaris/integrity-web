import React from 'react';
import ServiceMainText from '../Components/ServiceMainText';
import ServicePage from '../ServicePage/ServicePage';
import OurService from './OurService/OurService';

const businessConsultantText =
  "We provide professional advice, solutions, and recommendations to help clients solve problems and reach their goals. Supporting clients to realize and maximize their potentials to overcome any challenges with specific business strategy reflecting client's values. ";

export default function BusinessConsultant() {
  return (
    <ServicePage className="business-consultant">
      <ServiceMainText>{businessConsultantText}</ServiceMainText>
      <OurService />
    </ServicePage>
  );
}
