import React from 'react';
import ServicePage from '../ServicePage/ServicePage';
import ServiceMainText from '../Components/ServiceMainText';
import MiningComponents from './MiningComponents';

const miningIndustryText = `Mining industry is involved in the extraction of precious minerals and other geological materials. Followed by transforming extracted materials into a mineralized form that serves an economic benefit. The mining industry has been one of the key sectors contributing to Indonesia's economic growth, and raised Indonesia as one of the world’s largest exporters of thermal coal.\nOne of the largest PT. Integrity investment today is in mining industry, with coal as commodity. Our commitment is to plan, analyze and implement solutions that maximize value for the end user.`;

export default function MiningIndustry() {
  return (
    <ServicePage>
      <ServiceMainText>{miningIndustryText}</ServiceMainText>
      <MiningComponents />
    </ServicePage>
  );
}
