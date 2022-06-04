import React from 'react';
import {Col, Row} from 'reactstrap';
import ServiceMainText from '../Components/ServiceMainText';
import VerticalCentering from '../Components/VerticalCentering';
import ServicePage from '../ServicePage/ServicePage';

const marineIndustryData = {
  marineIndustryMainText:
    'As an archipelagic state, Indonesia has a very wide sea area. And as the biggest arciphelagic state in the world, the sea area plays a very important role in many sectors. Marine industry becomes very strategic. We consider it as a huge opportunity to maximize achievement and success together with our clients, resulting positive impacts in society. ',
  marineIndustryDetail: [
    {
      title: 'Fish Trading',
      description: `The distribution of fish is very uneven. Some places enjoy abundance far beyond the needs of the local population, while others may have no direct access to fisheries resources. It means that fish trading has a role to play in order to achieve a more even distribution of fish.
Running fish trading since 2018. Today, PT. Integrity has joined share holder in one of our clients company. Working with us, you will receive the right support to achieve your objectives and key results. `,
      image: '/assets/service/picture/fish.png',
    },
    {
      title: 'Dragging',
      description: `Fishery sector is an important contributor to ensure food security and creating employment in Indonesia. Indonesia sea area is a gate connecting Europe, Middle East, Africa, and South Asia. The sea and coastal waters have made Indonesia one of the most abundant fish dragging places in the world. Potentially, Indonesia fishery sector, including fish dragging, is the largest in the world. 
Presenting as management, financial and tax consultant, PT. Integrity provide support and assistance to companies that working on dragging sector. Our commitment to deliver high-quality consultant services is at the heart of what we do, by taking a collaborative approach with clients to develop optimal solutions and outcomes.`,
      image: '/assets/service/picture/ship.png',
    },
  ],
};

export default function MarineIndustry() {
  const {marineIndustryMainText, marineIndustryDetail} = marineIndustryData;
  return (
    <ServicePage>
      <ServiceMainText>{marineIndustryMainText}</ServiceMainText>
      {marineIndustryDetail.map((val, idx) => (
        <MarineDetail key={idx} marineIndustryDetail={val} />
      ))}
    </ServicePage>
  );
}

function MarineDetail({marineIndustryDetail}) {
  const {title, description, image} = marineIndustryDetail;
  return (
    <Row className="marine-industry-detail">
      <Col xs={12} md={6}>
        <VerticalCentering className="w-100">
          <img src={image} alt={title} />
        </VerticalCentering>
      </Col>
      <Col xs={12} md={6}>
        <VerticalCentering>
          <h1>{title}</h1>
          <p>{description}</p>
        </VerticalCentering>
      </Col>
    </Row>
  );
}
