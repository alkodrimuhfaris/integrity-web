import React from 'react';
import {Container} from 'reactstrap';

export default function ServiceHeader({image, title}) {
  return (
    <div className="service-header">
      <img src={image} alt={title} />
      <div className="service-header-title-container">
        <TitleServiceHeader title={title} />
      </div>
    </div>
  );
}

const TitleServiceHeader = ({title}) => {
  const titles = title.split(' ');
  return (
    <Container className="service-header-title-flex-container">
      <div className="service-header-title-wrapper">
        {titles.map((_title, idx) => (
          <span key={idx} className="service-header-title">
            {_title}
          </span>
        ))}
      </div>
    </Container>
  );
};
