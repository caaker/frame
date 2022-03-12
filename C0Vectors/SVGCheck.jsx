import React from 'react';
import ParentSVG from './ParentSVG.jsx';

export default ( props ) => {
  const path = <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>;
  return (
    <ParentSVG path={path} fontSize={props.fontSize} onClick={props.onClick} className={props.className} id={props.id} />
  );
};
