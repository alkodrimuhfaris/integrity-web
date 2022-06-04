import React from 'react';
import {Link} from 'react-router-dom';

export default function SubMenu({path, name}) {
  return (
    <li className="item-submenu-wrapper">
      <Link to={path} className="item-submenu">
        {name}
      </Link>
    </li>
  );
}
