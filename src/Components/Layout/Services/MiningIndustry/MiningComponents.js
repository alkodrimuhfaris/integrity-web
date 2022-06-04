import React from 'react';
import {Col, Row} from 'reactstrap';
import VerticalCentering from '../Components/VerticalCentering';

const miningComponentProperty = {
  mapImage: '/assets/service/picture/map.png',
  component: [
    {
      title: 'EASY ACCESS',
      description:
        'Flight from Jakarta to Banjarbaru City. Jakarta to Banjarbaru, approximately 1 hour 30 minutes. Heading to Tamiang Layang City by four wheel vehicle which can be reached within ±5 hours and continued to the consesion area within 1 hour.',
    },
    {title: 'TANJUNG & BERAI\nFORMATION'},
    {title: 'LOW SULFUR\nHIGH RANK COAL'},
    {title: 'BRIGHT SHINE\nDARK & HARD COAL'},
  ],
};

export default function MiningComponents() {
  const {mapImage, component} = miningComponentProperty;
  return (
    <>
      <Row className="mining-component-wrapper pt-4 mb-2">
        <Col xs={12} md={6} lg={8} className="mb-lg-4">
          <VerticalCentering>
            <img
              src={mapImage}
              className="map-image"
              alt="Flight from Jakarta to Banjarbaru City "
            />
          </VerticalCentering>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={4}
          className="mining-component-easy-access-wrapper"
        >
          <VerticalCentering>
            <h1>{component[0].title}</h1>
            <p>{component[0].description}</p>
          </VerticalCentering>
        </Col>
      </Row>
      <Row className="mining-component-wrapper pb-4">
        <Col xs={6} md={4} className="mining-component">
          <h1>{component[1].title}</h1>
        </Col>
        <Col xs={6} md={4} className="mining-component">
          <h1>{component[2].title}</h1>
        </Col>
        <Col xs={6} md={4} className="mining-component offset-3 offset-md-0">
          <h1>{component[3].title}</h1>
        </Col>
      </Row>
    </>
  );
}
