import './ApexCenter.css';
import React from 'react';
import { useSelector } from 'react-redux';
import ApexCenterHome               from './ApexCenterHome.jsx';
import ApexCenterUser               from './ApexCenterUser.jsx';
import ApexCenterPeople             from './ApexCenterPeople.jsx';

export default () => {
  console.logD('DEBUG: L3 : F1-Apex-Center ');
  const user = useSelector( state => state.User.current );
  const show = user || (window.location.hostname === 'localhost');
  
  return (
    <div className="apex-center">
      <ApexCenterHome/>
      <ApexCenterUser/>
      {show && <ApexCenterPeople/>}  
    </div>
  );
};