import React from 'react';
import SvgIcon from '../../ComponentLayout/SvgIcon';
import Title from '../../ComponentLayout/Title';

export default function OurCompany() {
  return (
    <div className="our-company">
      <Title title="Company" />
      <div className="container">
        <div className="row position-relative">
          <SvgIcon
            className={['typograph']}
            src="/assets/logo/handwriting.svg"
            alt="typography"
          />
          <div className="col-4">
            <img
              className="our-comp-image"
              src="/assets/photos/our-company.png"
              alt="our-company"
            />
          </div>
          <div className="col-8 company-description">
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
