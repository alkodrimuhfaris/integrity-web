import React from 'react';
import {useLocation} from 'react-router-dom';
import useWindowDimensions from './useWindowDimension';

export default function scrollToElement({hashElement = ''}) {
  const refScroll = React.useRef(null);
  const {hash} = useLocation();
  const {sm} = useWindowDimensions();

  React.useEffect(() => {
    if (hashElement !== '' && hash === hashElement && refScroll.current) {
      const yOffset = sm ? -60 : -90; // adapting to height of navbar on sm and non sm in pixel
      const y =
        refScroll.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }, [hash, hashElement]);

  return {refScroll};
}
