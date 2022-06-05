import React from 'react';
import {useNavigate} from 'react-router-dom';
import {HashContext} from '../../../Context/HashProvider';
import useClickOutsideComponent from '../../../Hooks/useClickOutsideComponent';
import SubMenu from './SubMenu';

const setSelectedMenu = (selectedMenu, pathname, idx, val) => {
  // detect if user is in service page
  if (pathname !== '/') {
    if (val.hash === 'service') {
      return 'selected';
    }
    return '';
  }
  // detect if user is in the home
  if (!selectedMenu && idx === 0) {
    return 'selected';
  }
  // detect if user is clicking another hash
  if (selectedMenu === val.hash) {
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
  const {selectedMenu, setSelectedMenu: setMenu} =
    React.useContext(HashContext);

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
      setMenu((prevMenu) => {
        if (prevMenu === 'service') {
          return null;
        }
        return prevMenu;
      });
    }
  }, ref);

  const toggleSubMenu = () => {
    setMenu(val.hash);
    if (val.hash === 'service') {
      setOpenSubMenu((openSubMenuBefore) => !openSubMenuBefore);
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
      className={`menu ${setSelectedMenu(selectedMenu, pathname, idx, val)}`}
      key={idx}
    >
      <button type="button" className="item-menu" onClick={toggleSubMenu}>
        {name}
      </button>
      {!subMenu ? null : (
        <ul ref={ref} className={`submenu ${openSubMenu ? 'hover' : ''}`}>
          {subMenu.map((submenuVal, index) => {
            const {path, name: subMenuName} = submenuVal;
            return <SubMenu key={index} path={path} name={subMenuName} />;
          })}
        </ul>
      )}
    </li>
  );
}
