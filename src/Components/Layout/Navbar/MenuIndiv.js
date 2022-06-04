import React from 'react';
import {Link} from 'react-router-dom';
import useClickOutsideComponent from '../../../Hooks/useClickOutsideComponent';

export default function MenuIndiv({hash, pathname, idx, val}) {
  const {name, subMenu} = val;
  const ref = React.useRef(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const useClickOutside = useClickOutsideComponent();

  // open service submenu
  React.useEffect(() => {
    if (hash === '#service') {
      setOpenSubMenu(true);
    }
  }, [hash]);

  // close service submenu
  useClickOutside(() => {
    if (val.hash === 'service') {
      setOpenSubMenu(false);
    }
  }, ref);

  const setSelectedMenu = () => {
    //
    if (!hash && idx === 0 && pathname === '/') {
      return 'selected';
    }
    if (hash === `#${val.hash}`) {
      return 'selected';
    }
    if (val.hash === 'service' && pathname !== '/') {
      return 'selected';
    }
    return '';
  };

  const toggleSubMenu = () => {
    if (val.hash === 'service') {
      setOpenSubMenu((openSubMenuBefore) => !openSubMenuBefore);
    }
    return null;
  };

  return (
    <li className={`menu ${setSelectedMenu()}`} key={idx}>
      <Link
        ref={ref}
        className="item-menu"
        to={{
          pathname: val.hash !== 'service' ? '/' : null,
          hash: val.hash,
        }}
        onClick={toggleSubMenu}
      >
        {name}
      </Link>
      {!subMenu ? null : (
        <ul className={`submenu ${openSubMenu ? 'hover' : ''}`}>
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
