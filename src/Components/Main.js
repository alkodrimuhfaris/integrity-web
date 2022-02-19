import React from 'react';
import Footer from './Layout/Footer.js/Footer';
import HeaderTop from './Layout/HeaderTop/HeaderTop';
import Navbar from './Layout/Navbar/Navbar';
import OurCompany from './Layout/OurCompany/OurCompany';
import OurService from './Layout/OurService/OurService';
import OurTeam from './Layout/OurTeam/OurTeam';
import ValuableClient from './Layout/ValuableClient/ValuableClient';
import {serviceActive} from '../dto/services.json';

export default function Main() {
  return (
    <div className="parent">
      <Navbar />
      <HeaderTop />
      {serviceActive && <OurService />}
      <OurCompany />
      <OurTeam />
      <ValuableClient />
      <Footer />
    </div>
  );
}
