import React from 'react';

/**
 * This jsx component recieve children and centering it vertically
 * Use it inside the bootstrap col or any component that has devined height
 * @returns jsx component
 */
export default function VerticalCentering({children, className}) {
  return (
    <div className="vertical-centering">
      <div className={className}>{children}</div>
    </div>
  );
}
