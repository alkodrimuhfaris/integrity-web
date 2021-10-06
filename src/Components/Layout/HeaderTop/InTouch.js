import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function InTouch() {
  return (
    <div className="in-touch-container">
      <span className="in-touch-text">We Provide</span>
      <h1>
        Business
        <br />
        Consultant
      </h1>
      <span className="in-touch-text">For every Business</span>
      <Link className="in-touch-btn" to={{hash: 'contact'}}>
        <span>
          <span>Get in touch</span> <BsArrowRight />
        </span>
      </Link>
    </div>
  );
}
