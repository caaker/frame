import React from 'react';
import { connect } from 'react-redux';
import './C1Link.css';

export default (props) => {

  function clicked(event) {
    event.preventventDefault();
    console.log('DEBUG: clicked!', e);
    window.open(this.props.data.link, '_blank');
  }

  let data = props.data;
  if(!data) {
    data.id = '99';
    data.domain = 'facebook.com';
    data.link = 'www.facebook.com';
    data.title = 'facebook';
  }

  return (
    <div className='link_div' id={data.id + 'a'} onClick={this.clicked}>
      <img className='link_image' src = {'http://www.google.com/s2/favicons?domain=' + data.domain}/>
      <a className='link_anchor' onClick={this.clicked} href ={data.link} target='_blank'>
        {data.title}
      </a>
    </div>
  );
};
