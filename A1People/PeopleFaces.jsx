import React from 'react';
import './PeopleFaces.css';
import PeopleFacesBox from './PeopleFacesBox.jsx';

export default (props) => {

  let people = props.people;

  function makePeople() {
    if(people) {
      people = people.map((val, index) => {
        return <PeopleFacesBox key={val.id} name={val.name} src={val.pic} online={val.online}/>;
      });
      return people;
    }
  }

  return (
    <div className='people_faces'>
      { makePeople() }
    </div>
  );
};
