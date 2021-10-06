import React from 'react';
import useWindowDimensions from '../../../Helpers/useWindowDimension';
import BurgerButton from './Burgerbutton';
import Menu from './Menu';

export default function Navbar() {
  const {sm} = useWindowDimensions();
  const [open, setOpen] = React.useState(false);

  return (
    <div className="nav-bar">
      <div className="container navbar-cont">
        <img className="logo" src="/assets/logo/Logo.svg" alt="logo" />
        <Menu open={open} />

        {!sm ? null : <BurgerButton setOpen={setOpen} open={open} />}
      </div>
    </div>
  );
}
