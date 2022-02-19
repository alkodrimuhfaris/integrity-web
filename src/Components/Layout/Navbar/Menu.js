import React from 'react';
import {useLocation} from 'react-router-dom';
import Contact from './Contact';
import MenuIndiv from './MenuIndiv';
import {serviceActive} from '../../../dto/services.json';

export default function Menu({open}) {
  const {hash} = useLocation();

  const menuList = [
    {name: 'Home', hash: 'home'},
    {name: 'Service', hash: 'service'},
    {name: 'About Us', hash: 'about-us'},
    {name: 'Client', hash: 'client'},
    {name: 'Contact', hash: 'contact'},
  ];

  return (
    <ul className={`menus ${open ? 'open' : ''}`}>
      {menuList.map((val, idx) => {
        if (!serviceActive && idx === 1) {
          return null;
        }
        return <MenuIndiv key={idx} hash={hash} val={val} idx={idx} />;
      })}
      <Contact />
    </ul>
  );
}
