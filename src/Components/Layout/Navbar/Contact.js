import React from 'react';
import {FaPhoneAlt} from 'react-icons/fa';
import ReactGa from 'react-ga';
import {callCenter} from '../../../dto/global';

export default function Contact() {
  const sendEvent = () => {
    ReactGa.event({
      category: 'Call Center',
      action: 'Click Call Center',
    });
  };

  return (
    <div className="contact">
      <a
        className="contact-wrapper"
        onClick={sendEvent}
        href={`tel:${callCenter}`}
      >
        <FaPhoneAlt color="#ef4136" />
        <span className="ml-1 ml-xl-3">021 570 1505</span>
      </a>
    </div>
  );
}
