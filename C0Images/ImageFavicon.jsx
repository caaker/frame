import React from 'react';

export default (props) => {
  return (
    <img className={props.className} src={'https://www.google.com/s2/favicons?domain=' + props.domain} />
  );
};
