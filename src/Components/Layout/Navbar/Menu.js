import React from 'react';
import {useLocation} from 'react-router-dom';
import Contact from './Contact';
import MenuIndiv from './MenuIndiv';

export default function Menu({open}) {
  const {hash, pathname} = useLocation();

  const menuList = [
    {name: 'Home', hash: 'home'},
    {
      name: 'Service',
      hash: 'service',
      subMenu: [
        {path: '/business', name: 'Business Consultant'},
        {path: '/mining', name: 'Mining Industry'},
        {path: '/marine', name: 'Marine Industry'},
        {path: '/property', name: 'Property'},
      ],
    },
    {name: 'About Us', hash: 'about-us'},
    {name: 'Client', hash: 'client'},
    {name: 'Contact', hash: 'contact'},
  ];

  return (
    <ul className={`menus ${open ? 'open' : ''}`}>
      {menuList.map((val, idx) => (
        <MenuIndiv
          key={idx}
          hash={hash}
          pathname={pathname}
          val={val}
          idx={idx}
        />
      ))}
      <Contact />
    </ul>
  );
}
