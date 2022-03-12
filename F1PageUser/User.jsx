import './User.css';
import React              from 'react';
import { useSelector }    from 'react-redux';
import ULogin             from './ULogin.jsx';
import UAccount           from './UAccount.jsx';

export default () => {
  const user = useSelector((state)=>state.User.current);
  const logged_in = user || (window.location.hostname === 'localhost');
  console.logD('DEBUG: L3 : F1-Page-User, ' + user);
  return (
    <div id='app-user'>
      {!user && <ULogin></ULogin>}
      {user  && <UAccount></UAccount>}
    </div>
  );
};
