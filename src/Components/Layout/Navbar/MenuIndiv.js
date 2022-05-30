import React from 'react';
import {Link} from 'react-router-dom';

export default function MenuIndiv({hash, pathname, idx, val}) {
  const {name, subMenu} = val;
  return (
    <li
      className={`menu ${
        (!hash && idx === 0 && pathname === '/') || hash === `#${val.hash}`
          ? 'selected'
          : ''
      }`}
      key={idx}
    >
      <Link
        className="item-menu"
        to={{
          pathname: '/',
          hash: val.hash,
        }}
      >
        {name}
      </Link>
      {!subMenu ? null : (
        <ul className={`submenu ${hash === '#service' ? 'hover' : ''}`}>
          {subMenu.map((submenuVal, index) => {
            const {path, name: subMenuName} = submenuVal;
            return <SubMenu key={index} path={path} name={subMenuName} />;
          })}
        </ul>
      )}
    </li>
  );
}

function SubMenu({path, name}) {
  return (
    <li className="item-submenu-wrapper">
      <Link to={path} className="item-submenu">
        {name}
      </Link>
    </li>
  );
}
