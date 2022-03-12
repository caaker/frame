import './ULogin.css';
import React from 'React';
import ULoginGoogle from './ULoginGoogle.jsx';

export default () => {
  return (
    <div id ="box-container">
      <div id ="box-container-2">
        <p className="title">
            Livelong
        </p>
        <ULoginGoogle/>
      </div>
    </div>
  );
};
