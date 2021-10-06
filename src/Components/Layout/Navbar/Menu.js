import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import Contact from './Contact';

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
      {menuList.map((val, idx) => (
        <li
          className={`menu ${
            !hash && idx === 0
              ? 'selected'
              : hash === `#${val.hash}`
              ? 'selected'
              : ''
          }`}
          key={idx}
        >
          <Link
            className="item-menu"
            to={{
              hash: val.hash,
            }}
          >
            {val.name}
          </Link>
        </li>
      ))}
      <Contact />
    </ul>
  );
}
