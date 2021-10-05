import React from 'react';
import scrollToElement from '../../../Helpers/scrollToElement';
import SvgIcon from '../../ComponentLayout/SvgIcon';
import Title from '../../ComponentLayout/Title';

export default function OurCompany() {
  const {refScroll} = scrollToElement({hashElement: '#about-us'});

  return (
    <div ref={refScroll} className="our-company pt-2">
      <Title title="Company" />
      <div className="container">
        <div className="our-company-cont position-relative">
          <SvgIcon
            className={['typograph']}
            src="/assets/logo/handwriting.svg"
            alt="typography"
          />
          <div className="img-company-container">
            <div className="img-company-wrapper">
              <img
                className="our-comp-image"
                src="/assets/photos/our-company.png"
                alt="our-company"
              />
            </div>
          </div>
          <div className="company-description">
            <p>
              We believe that we’re only as good as the good we do. So, when
              people ask, “what’s different about Integrity?” the answer resides
              in many specific examples of where we have helped our member firm
              clients, our people, and sections of society to achieve remarkable
              goals, solve unravel intricate or make meaningful progress. For
              us, good isn’t good enough. We aim to be the best at all that we
              do—to help clients realize their ambitions; to make a positive
              difference in society; and to maximize the success of our people.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
