import React from 'react';
import {useNavigate} from 'react-router-dom';
import {HashContext} from '../../../Context/HashProvider';
import useClickOutsideComponent from '../../../Hooks/useClickOutsideComponent';
import SubMenu from './SubMenu';

const setSelectedMenu = (hash, pathname, idx, val) => {
  // if in home
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

export default function MenuIndiv({hash, pathname, idx, val}) {
  const {name, subMenu} = val;
  const ref = React.useRef(null);
  const [openSubMenu, setOpenSubMenu] = React.useState(false);
  const useClickOutside = useClickOutsideComponent();
  const navigate = useNavigate();
  const {setHash} = React.useContext(HashContext);

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

  const toggleSubMenu = () => {
    if (val.hash === 'service') {
      setOpenSubMenu((openSubMenuBefore) => !openSubMenuBefore);
      return null;
    }
    if (`#${val.hash}` !== hash) {
      navigate({
        pathname: val.hash !== 'service' ? '/' : null,
        hash: val.hash,
      });
      return null;
    }
    setHash(`#${val.hash}`);
    return null;
  };

  return (
    <li
      className={`menu ${setSelectedMenu(hash, pathname, idx, val)}`}
      key={idx}
    >
      <button
        type="button"
        ref={ref}
        className="item-menu"
        onClick={toggleSubMenu}
      >
        {name}
      </button>
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
