import React from 'react';
import ParentSVG from './ParentSVG.jsx';

export default ( props ) => {
  const path = <path d="m12 5.69 5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />;
  return (
    <ParentSVG path={path} fontSize={props.fontSize} onClick={props.onClick} className={props.className} id={props.id} />
  );
};
