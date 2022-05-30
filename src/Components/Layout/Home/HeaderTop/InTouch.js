import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export default function InTouch() {
  return (
    <div className="in-touch-container">
      <span className="in-touch-text bigger bold">We are</span>
      <h1>
        Creating
        <br />
        Value
      </h1>
      <span className="in-touch-text bigger bold">For Business</span>
      <Link className="in-touch-btn" to={{hash: 'contact'}}>
        <span>
          <span>Get in touch</span> <BsArrowRight />
        </span>
      </Link>
    </div>
  );
}
