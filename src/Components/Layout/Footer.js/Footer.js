import React from 'react';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdPhoneAndroid} from 'react-icons/md';
import {IoMail} from 'react-icons/io5';
import SvgIcon from '../../ComponentLayout/SvgIcon';
import scrollToElement from '../../../Helpers/scrollToElement';

export default function Footer() {
  const {refScroll} = scrollToElement({hashElement: '#contact'});
  return (
    <div ref={refScroll} className="footer">
      <div className="container mb-4">
        <SvgIcon src="/assets/logo/Logo.svg" className={['logo-footer']} />
        <div className="row address-container mb-3">
          <div className="col-md-6 col-12 address">
            <h3>Office</h3>
            <p>
              Jl. Bendungan Hilir Raya No.76
              <br />
              Kota Jakarta Pusat, DKI Jakarta 10210
            </p>
          </div>
          <div className="col-md-6 col-12 address">
            <h3>Workshop</h3>
            <p>
              Pesanggarahan Building
              <br />
              Jl Lebak Bulus 3 No.50 Ruang 101 & 103
            </p>
          </div>
        </div>
        <div className="row contact-container">
          <div className="col-md-3 col-12 contact">
            <a className="contact-link" href="tel:(+62)215701505">
              <FaPhoneAlt className="contact-icon" />
              <span>+62 21 5701 505</span>
            </a>
          </div>
          <div className="col-md-3 col-12 contact">
            <a className="contact-link" href="tel:(+62)8997665593">
              <MdPhoneAndroid className="contact-icon" />
              <span>+62 899 766 5593</span>
            </a>
          </div>
          <div className="col-md-3 col-12 contact">
            <a className="contact-link" href="mailto:info@ptintegrity.co.id">
              <IoMail className="contact-icon" />
              <span>info@ptintegrity.co.id</span>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright © 2021 PT.Integiry All Rights Reserved.</span>
      </div>
    </div>
  );
}
