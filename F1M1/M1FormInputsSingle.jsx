import React from 'react';
import { useSelector, useDispatch }   from 'react-redux';
import SVGCheck                     from '../C0Vectors/SVGCheck.jsx';

export default (props) => {
  return (
    <div className='modal_article_div'>
      <input
        type='text'
        readOnly={props.readonly}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
        placeholder={props.placeholder}
        name={props.name}>
      </input>
      {props.valid && <SVGCheck id='z_icon_check'/>}
    </div>
  );
};
