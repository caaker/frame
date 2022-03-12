// id, name, pic, online, messages
const test = [

  {
    id: 0,
    name: 'chris',
    pic: '/images/test.jpg',
    online: true,
    messages: [
      { time: 1, message: 'L:Hello', from: 'chris', to: 'll' },
      { time: 2, message: 'L:My name is Neal', from: 'chris',  to: 'll' },
    ]
  },

  {
    id: 1,
    name: 'll',
    pic: 'https://laurenrimmerg2.files.wordpress.com/2011/05/80s-girls-19.jpg',
    online: true,
    messages: [
      { time: 1, message: 'L:Hi', from: 'll',  to: 'chris' },
      { time: 2, message: 'L:My name is Joe', from: 'll', to: 'chris' },
    ]
  },

  {
    id: 2,
    name: 'neal',
    pic: 'https://eadn-wc02-3894996.nxedge.io/cdn/wp-content/uploads/2019/01/neal-barnard-headshot-cropped.jpg',
    online: true,
    messages: [
      { time: 1, message: 'L:Greetings', from: 'neal', to: 'bob' },
      { time: 2, message: 'L:My name is Neal', from: 'neal', to: 'bob' },
    ]
  }

];

export default test;
