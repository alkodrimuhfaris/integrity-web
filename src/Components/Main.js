import React from 'react';
import {useLocation} from 'react-router-dom';
import Footer from './Layout/Footer.js/Footer';
import HeaderTop from './Layout/HeaderTop/HeaderTop';
import Navbar from './Layout/Navbar/Navbar';
import OurCompany from './Layout/OurCompany/OurCompany';
import OurService from './Layout/OurService/OurService';
import OurTeam from './Layout/OurTeam/OurTeam';
import ValuableClient from './Layout/ValuableClient/ValuableClient';

export default function Main() {
  const {_hash} = useLocation();

  // React.useEffect(() => {
  //   console.log(hash);
  // }, [hash]);

  return (
    <div className="parent">
      <Navbar />
      <HeaderTop />
      <OurService />
      <OurCompany />
      <OurTeam />
      <ValuableClient />
      <Footer />
    </div>
  );
}
