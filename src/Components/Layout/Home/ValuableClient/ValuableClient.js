import React from 'react';
import scrollToElement from '../../../../Helpers/scrollToElement';
import Title from '../../../ComponentLayout/Title';

export default function ValuableClient() {
  const {refScroll} = scrollToElement({hashElement: '#client'});
  const client1 = [
    {src: '/assets/client/01-APBS.svg', company: 'APBS'},
    {src: '/assets/client/02-Timur-Bahari.svg', company: 'Timur-Bahari'},
    {src: '/assets/client/03-Jasa-Raharja.svg', company: 'Jasa-Raharja'},
    {src: '/assets/client/04-BWA.svg', company: 'BWA'},
  ];
  const client2 = [
    {src: '/assets/client/05-Cipta-Usaha.svg', company: 'Cipta-Usaha'},
    {
      src: '/assets/client/06-Gerbang-Watugunung.svg',
      company: 'Gerbang-Watugunung',
    },
    {src: '/assets/client/07-TSS.svg', company: 'TSS'},
  ];
  return (
    <div ref={refScroll} className="valuable-client pt-2">
      <div className="valuable-container">
        <div className="container pb-2 pb-md-4">
          <Title valuableclient />
          <div className="client">
            {client1.map(({src, company}, idx) => (
              <img key={idx} src={src} className="client-icons" alt={company} />
            ))}
          </div>
          <div className="client">
            {client2.map(({src, company}, idx) => (
              <img
                key={idx}
                src={src}
                className="client-icons bottom"
                alt={company}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
