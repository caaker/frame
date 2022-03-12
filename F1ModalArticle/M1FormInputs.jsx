import React from 'react';
import { useSelector, useDispatch }   from 'react-redux';
import validate                       from './Z1Validate.js';
import M10                            from './M1FormInputs0.jsx';
import addDomain                      from './M1FormAddDomain.jsx';
import URL                            from '../../arc/class.URL.js';

export default () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ArticleForm) || {};
  function onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const valid = validate(name, value);
    const send = [name, value, valid];
    dispatch({type: 'updateArticleForm', data: send});
    addDomain(name, value, dispatch);
  }
  return (
    <>
      <M10 valid = {data.link.valid}     value = {data.link.value}    onChange={onChange} className = 'modal_article_input' placeholder="link"    name="link" />
      <M10 valid = {data.image.valid}    value = {data.image.value}   onChange={onChange} className = 'modal_article_input' placeholder="image"   name="image" />
      <M10 valid = {data.title.valid}    value = {data.title.value}   onChange={onChange} className = 'modal_article_input' placeholder="title"   name="title" />
      <M10 valid = {data.summary.valid}  value = {data.summary.value} onChange={onChange} className = 'modal_article_input' placeholder="summary" name="summary" />
      <M10 valid = {data.tag.valid}      value = {data.tag.value}     onChange={onChange} className = 'modal_article_input' placeholder="tag"     name="tag" />
      <M10 valid = {data.domain.valid}   value = {data.domain.value}  onChange={onChange} className = 'modal_article_input' placeholder="domain"  name="domain" readonly = {true} />
    </>
  );
};
