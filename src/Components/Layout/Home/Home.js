import React from 'react';
import {Link} from 'react-router-dom';
import HeaderTop from './HeaderTop/HeaderTop';
import OurCompany from './OurCompany/OurCompany';
import OurService from './OurService/OurService';
import OurTeam from './OurTeam/OurTeam';
import ValuableClient from './ValuableClient/ValuableClient';
import {serviceActive} from '../../../dto/services.json';

export default function Home() {
  return (
    <>
      <HeaderTop />
      {serviceActive && <OurService />}
      <OurCompany />
      <OurTeam />
      <ValuableClient />
    </>
  );
}
