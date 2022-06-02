import React from 'react';
import {Link} from 'react-router-dom';
import {servicesHome} from '../../../../dto/services.json';

export default function Services() {
  return (
    <div className="service-home container">
      <div className="row">
        {servicesHome.map((val, idx) => (
          <Service
            image={val.image}
            title={val.title}
            path={val.path}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}

function Service({image, title, path}) {
  return (
    <div className="col-12 col-md-6 service-link-wrapper">
      <Link to={path} className="service-link-container">
        <img src={image} alt={title} />
        <div className="service-link-text-container">
          <p className="service-link-text">{title}</p>
        </div>
      </Link>
    </div>
  );
}
