import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import OurCompany from './OurCompany/OurCompany';
import OurTeam from './OurTeam/OurTeam';
import ValuableClient from './ValuableClient/ValuableClient';
import Services from './Service/Services';

export default function Home() {
  return (
    <>
      <HeaderTop />
      <Services />
      <OurCompany />
      <OurTeam />
      <ValuableClient />
    </>
  );
}
