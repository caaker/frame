import './PeopleFacesBox.css';

import React from 'react';
import ImageCircle from '../C0Images/ImageCircle.jsx';

export default (props) => {
  return (
    <div className='people_box'>
      <ImageCircle key={props.id} src={props.src} />
      <p className='people_box_title'>{props.name}</p>
    </div>
  );
};