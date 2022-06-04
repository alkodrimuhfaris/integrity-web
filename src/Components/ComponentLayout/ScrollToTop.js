import React from 'react';
import SvgIcon from './SvgIcon';

export default function ScrollToTop() {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      className="scroll-to-top-button"
    >
      <SvgIcon
        src="/assets/icon/scrollToTop.svg"
        className={['scroll-to-top']}
      />
    </button>
  );
}
