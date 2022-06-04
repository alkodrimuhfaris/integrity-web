import React from 'react';
import {Link} from 'react-router-dom';
import useClickOutsideComponent from '../../../Hooks/useClickOutsideComponent';
import useWindowDimensions from '../../../Hooks/useWindowDimension';
import BurgerButton from './Burgerbutton';
import Menu from './Menu';

export default function Navbar() {
  const {sm} = useWindowDimensions();
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef(null);
  const useClickOutside = useClickOutsideComponent();

  // close the menu if click outside menu component
  useClickOutside(() => {
    setOpen(false);
  }, menuRef);

  return (
    <div ref={menuRef} className="nav-bar">
      <div className="container navbar-cont">
        <Link to="/">
          <img className="logo" src="/assets/logo/Logo.svg" alt="logo" />
        </Link>
        <Menu open={open} />

        {!sm ? null : <BurgerButton setOpen={setOpen} open={open} />}
      </div>
    </div>
  );
}
