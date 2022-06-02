import React from 'react';
import {Link} from 'react-router-dom';

function useOutsideClick(callBack = () => {}, ref) {
  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callBack();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default function MenuIndiv({hash, pathname, idx, val}) {
  const {name, subMenu} = val;
  const ref = React.useRef(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  // open service submenu
  React.useEffect(() => {
    if (hash === '#service') {
      setOpenSubMenu(true);
    }
  }, [hash]);

  // close service submenu
  useOutsideClick(() => {
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
