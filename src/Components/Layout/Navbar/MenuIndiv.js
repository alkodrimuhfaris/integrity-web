import React from 'react';
import {Link} from 'react-router-dom';

export default function MenuIndiv({hash, idx, val}) {
  return (
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
  );
}
