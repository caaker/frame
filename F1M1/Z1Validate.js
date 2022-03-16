import URL                         from '../../arc/class.URL.js';

export default (name, value) => {

  if(name === 'link') {
    const link = new URL(value);
    if( !link.valid ) {
      return false;
    }
  }

  if(name === 'image') {
    const image = new URL(value);
    if( !image.valid ) {
      return false;
    }
  }

  if(name === 'title') {
    if( value === '') {
      return false;
    }
  }

  if(name === 'summary') {
    if( value === '') {
      return false;
    }
  }

  if(name === 'tag') {
    if( value === '') {
      return false;
    }
  }

  if(name === 'domain') {
    if( value === '') {
      return false;
    }
  }

  return true;

};
