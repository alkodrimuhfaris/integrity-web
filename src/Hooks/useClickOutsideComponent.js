import React from 'react';

/**
 * This hooks is to call a function when you click outside the reference component
 * first parameter is callback, and second parameter is ref from targeted component
 */
export default () =>
  (callBack = () => {}, ref) => {
    React.useEffect(() => {
      /**
       * function to run if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          callBack();
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
