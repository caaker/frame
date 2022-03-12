import React from 'react';
import ParentSVG from './ParentSVG.jsx';

export default ( props ) => {
  const path = <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path>;
  return (
    <ParentSVG path={path} fontSize={props.fontSize} onClick={props.onClick} className={props.className} id={props.id} />
  );
};
