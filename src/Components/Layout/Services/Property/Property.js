import React from 'react';
import {Col, Row} from 'reactstrap';
import ServiceMainText from '../Components/ServiceMainText';
import ServicePage from '../ServicePage/ServicePage';

const propertyData = {
  propertyText: [
    'Property industry represents the property and construction sector, including contractors, developers and builders; property professional service providers including, architects, surveyors, engineers and planners; as well as banks, financial institutions, asset and property managers.',
    'This Industry can be challenging, but seeing projects come to fruition is the ultimate satisfaction. Property industry offers lots of opportunities to gain large profit.',
    'Today, PT. Integrity is already working with some clients in property industry. We support clients and offer advices on how to manage property industry such as residential area, shopping mall, and hotels. Our team has the necessary skills and experience to provide corporate advice and assist clients to create and extract value.',
  ],
  firstLogo: '/assets/service/picture/arrayan.svg',
  secondLogo: '/assets/service/picture/bukitSwiss.svg',
};

export default function Property() {
  const {propertyText, firstLogo, secondLogo} = propertyData;
  return (
    <ServicePage>
      <ServiceMainText>
        {propertyText[0]}
        <br />
        <br />
        {propertyText[1]}
        <br />
        {propertyText[2]}
      </ServiceMainText>
      <Partners firstLogo={firstLogo} secondLogo={secondLogo} />
    </ServicePage>
  );
}

function Partners({firstLogo, secondLogo}) {
  return (
    <Row className="property-partners">
      <Col
        xs={12}
        className="d-flex align-items-center justify-content-center mb-2 mb-md-4"
      >
        <h1>Our Partners</h1>
      </Col>
      <Col xs={6} className="d-flex align-items-center justify-content-end">
        <img src={firstLogo} alt="arrayan" className="property-partner-logo" />
      </Col>
      <Col xs={6} className="d-flex align-items-center justify-content-start">
        <img src={secondLogo} alt="arrayan" className="property-partner-logo" />
      </Col>
    </Row>
  );
}
