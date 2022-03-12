import './Apex.css';
import React from 'react';
import ApexLeft                   from './ApexLeft.jsx';
import ApexCenter                 from './ApexCenter.jsx';
import ApexRight                  from './ApexRight.jsx';

export default () => {
  console.logD('DEBUG: L2 : F1-Apex ');
  return (
    <div className='apex_hold_hold'>
      <div className='apex_hold'>
        <ApexLeft/>
        <ApexCenter/>
        <ApexRight/>
      </div>
    </div>
  );
};
