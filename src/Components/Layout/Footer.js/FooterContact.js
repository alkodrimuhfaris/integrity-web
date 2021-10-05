import React from 'react';

export default function FooterContact({val}) {
  const {Icon} = val;
  return (
    <div className="col-lg-3 col-md-4 col-12 contact">
      <a className="contact-link" href={val.href}>
        <Icon className="contact-icon" />
        <span>{val.text}</span>
      </a>
    </div>
  );
}
