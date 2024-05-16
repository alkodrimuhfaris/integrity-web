import React from 'react';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdPhoneAndroid} from 'react-icons/md';
import {IoMail} from 'react-icons/io5';
import SvgIcon from '../../ComponentLayout/SvgIcon';
import scrollToElement from '../../../Helpers/scrollToElement';
import FooterContact from './FooterContact';
import Address from './Address';
import Copyright from './Copyright';

export default function Footer() {
  const {refScroll} = scrollToElement({hashElement: '#contact'});
  const contacts = [
    {text: '(+62) 21 5701 505', href: 'tel:(+62)215701505', Icon: FaPhoneAlt},
    {
      text: '(+62) 899 766 5593',
      href: 'tel:(+62)8997665593',
      Icon: MdPhoneAndroid,
    },
    {
      text: 'info@ptintegrity.co.id',
      href: 'mailto:info@ptintegrity.co.id',
      Icon: IoMail,
    },
  ];

  const address = [
    {
      title: 'Office',
      top: 'Jl. Bendungan Hilir Raya No.76',
      bottom: 'Kota Jakarta Pusat, DKI Jakarta 10210',
    },
    // {
    //   title: 'Workshop',
    //   top: 'Pesanggarahan Building',
    //   bottom: ' Jl Lebak Bulus 3 No.50 Ruang 101 & 103',
    // },
  ];

  return (
    <div ref={refScroll} className="footer">
      <div className="container mb-4">
        <SvgIcon src="/assets/logo/Logo.svg" className={['logo-footer']} />
        <div className="row address-container mb-3">
          {address.map((val, idx) => (
            <Address key={idx} val={val} />
          ))}
        </div>
        <div className="row contact-container">
          {contacts.map((val, idx) => (
            <FooterContact key={idx} val={val} />
          ))}
        </div>
      </div>
      <Copyright />
    </div>
  );
}
