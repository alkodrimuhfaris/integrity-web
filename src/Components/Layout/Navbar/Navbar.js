import React from 'react';
import {Link} from 'react-router-dom';
import useWindowDimensions from '../../../Hooks/useWindowDimension';
import BurgerButton from './Burgerbutton';
import Menu from './Menu';

export default function Navbar() {
  const {sm} = useWindowDimensions();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="nav-bar">
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
