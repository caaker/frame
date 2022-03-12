import './UAccount.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import getPosition from './Location';

export default () => {
  let User = useSelector(state => state.User.current);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  getPosition().then((location)=>{
    setLat(location.coords.latitude);
    setLong(location.coords.longitude);
  }).catch((error) =>{
    console.error('DEBUG: navigator.geolocation error', error);
  });

  return (
    <div id = "user-container">
      <div id = "user-container-2">
        <div id="user-image-wrapper">
          <img id = "user-image" src={User.pic_url}/>
        </div>
        <p id = "user-name">{User.name}</p>
        <p id = "user-email">{User.email}</p>
        <p id = "user-location">Location: {lat}, {long}</p>
        <a id = "user-button" href="/auth/logout">Logoff</a>
      </div>
    </div>
  );
};
