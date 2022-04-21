import React from 'react';
import './PeopleFaces.css';
import PeopleFacesBox from './PeopleFacesBox.jsx';

export default (props) => {
  let people = props.people;
  function makePeople() {
    if(people) {
      return people.map((val, index) => <PeopleFacesBox key={val.id} id={val.id} name={val.name} src={val.pic} online={val.online}/>);
    }
  }

  return (
    <div className='people_faces'>
      { makePeople() }
    </div>
  );
};
