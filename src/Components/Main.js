import React from 'react';
import Footer from './Layout/Footer.js/Footer';
import HeaderTop from './Layout/HeaderTop/HeaderTop';
import Navbar from './Layout/Navbar/Navbar';
import OurCompany from './Layout/OurCompany/OurCompany';
import _OurService from './Layout/OurService/OurService';
import OurTeam from './Layout/OurTeam/OurTeam';
import ValuableClient from './Layout/ValuableClient/ValuableClient';

export default function Main() {
  return (
    <div className="parent">
      <Navbar />
      <HeaderTop />
      {/* <OurService /> */}
      <OurCompany />
      <OurTeam />
      <ValuableClient />
      <Footer />
    </div>
  );
}
