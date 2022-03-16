export const initial_state = {
  link:{
    value:''
  },
  image:{
    value:''
  },
  title:{
    value:''
  },
  summary:{
    value:''
  },
  tag:{
    value:''
  },
  domain:{
    value:''
  },
  valid: false
};

// test case 1
export const test_state = {
  link: {
    value: 'https://www.hsph.harvard.edu/nutritionsource/salt-and-sodium/',
    valid: true
  },
  image: {
    value: 'https://i.pinimg.com/564x/e1/fa/80/e1fa800c86db4f694465634870ff5273.jpg',
    valid: true
  },
  title: {
    value: 'Salt and Sodium',
    valid: true
  },
  summary: {
    value: 'Salt, also known as sodium chloride, is about 40% sodium and 60% chloride. It flavors food and is used as a binder and stabilizer.',
    valid: true
  },
  tag: {
    value: 'Nutrition',
    valid: true
  },
  domain: {
    value: 'hsph.harvard.edu',
    valid: true
  },
  valid: true
};

// create a map for objets
export const makeData = (raw) => {
  console.log(raw);
  const ret = {
    link: {
      value: raw.link,
      valid: true
    },
    image: {
      value: raw.image,
      valid: true
    },
    title: {
      value: raw.title,
      valid: true
    },
    summary: {
      value: raw.summary,
      valid: true
    },
    tag: {
      value: raw.tag,
      valid: true
    },
    domain: {
      value: raw.domain,
      valid: true
    },
    valid: true
  };

  return ret;
};

export const test = (newState) => {
  let keys = Object.keys(newState);
  for(let i = 0; i < keys.length; i++) {
    if(keys[i] === 'valid') {
    } else if( !newState[keys[i]].valid) {
      return false;
    }
  }
  return true;
};

export const exp = { initial_state, test_state, makeData, test };
export default exp;