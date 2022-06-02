import React from 'react';
import {Col, Row} from 'reactstrap';
import {services} from '../../../../../dto/services.json';
import SvgIcon from '../../../../ComponentLayout/SvgIcon';

export default function ServiceCards() {
  return (
    <Row>
      {services.map((val, idx) => {
        const {icon, title} = val;
        return <ServiceCard icon={icon} title={title} key={idx} />;
      })}
    </Row>
  );
}

function ServiceCard({icon, title}) {
  return (
    <Col className="service-card-wrapper" xs={12} xl={6}>
      <div className="service-card">
        <div className="icon-card-wrapper">
          <SvgIcon src={icon} className={['icon-card']} />
        </div>
        <span className="service-title-card">{title}</span>
      </div>
    </Col>
  );
}
