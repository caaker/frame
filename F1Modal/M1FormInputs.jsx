import React from 'react';
import { useSelector, useDispatch }   from 'react-redux';
import validate                       from './Z1Validate.js';
import M10                            from './M1FormInputsSingle.jsx';
import addDomain                      from './Z1AddDomain.jsx';
import URL                            from '../../arc/class.URL.js';
import './M1FormInputs.css';
import C1Copy                         from    '../C1Copy/C1Copy.jsx';


export default () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ArticleForm) || {};
  const email = useSelector((state) => state.User.current.email);
  const admin = (email === 'caaker.0@gmail.com') || (window.location.hostname === 'localhost');

  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const valid = validate(name, value);
    dispatch({type: 'updateArticleForm', data: [name, value, valid]});
    addDomain(name, value, dispatch);
  }

  const title = !!data.title.value;
  return (
    <span>
      <M10 valid = {data.link.valid}     value = {data.link.value}    onChange={onChange} className = 'modal_article_input' placeholder="link"    name="link" />
      { admin &&
      <div className='modal_admin_inputs'>
        <M10 valid={data.image.valid}     value = {data.image.value}   onChange={onChange} className = 'modal_article_input' placeholder="image"   name="image" />
        <M10 valid={data.title.valid}     value = {data.title.value}   onChange={onChange} className = 'modal_article_input' placeholder="title"   name="title" />
        <M10 valid={data.summary.valid}   value = {data.summary.value} onChange={onChange} className = 'modal_article_input' placeholder="summary" name="summary" />
        <M10 valid={data.tag.valid}       value = {data.tag.value}     onChange={onChange} className = 'modal_article_input' placeholder="tag"     name="tag" />
        <M10 valid={data.domain.valid}    value = {data.domain.value}  onChange={onChange} className = 'modal_article_input' placeholder="domain"  name="domain" readonly = {true} />
        {title && <C1Copy className='c1_copy_modal' title={data.title.value}/>}
      </div>
      }
    </span>
  );
};
