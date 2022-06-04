import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Layout/Footer.js/Footer';
import Navbar from './Layout/Navbar/Navbar';
import Home from './Layout/Home/Home';
import BusinessConsultant from './Layout/Services/BusinessConsultant/BusinessConsultant';
import MiningIndustry from './Layout/Services/MiningIndustry/MiningIndustry';
import MarineIndustry from './Layout/Services/MarineIndustry/MarineIndustry';
import Property from './Layout/Services/Property/Property';
import RestoreScroll from './ComponentLayout/RestoreScroll';
import ScrollToTop from './ComponentLayout/ScrollToTop';
import HashProvider from '../Context/HashProvider';

export default function Main() {
  return (
    <BrowserRouter>
      <HashProvider>
        <div className="parent">
          <RestoreScroll />
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="business" element={<BusinessConsultant />} />
            <Route path="mining" element={<MiningIndustry />} />
            <Route path="marine" element={<MarineIndustry />} />
            <Route path="property" element={<Property />} />
          </Routes>
          <Footer />
        </div>
      </HashProvider>
    </BrowserRouter>
  );
}
