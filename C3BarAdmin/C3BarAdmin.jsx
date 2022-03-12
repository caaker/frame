import './C3BarAdmin.css';
import React from 'react';
import { useSelector } from 'react-redux';
import C3BarAdminEdit from './C3BarAdminEdit.jsx';
import C3BarAdminDelete from './C3BarAdminDelete.jsx';


import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default (props) => {
  const email = useSelector((state) => state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com');
  return (
    <div id="article_bar_admin">
      <C3BarAdminEdit data={props.data}/>
      <C3BarAdminDelete data={props.data}/>
    </div>
  );
};