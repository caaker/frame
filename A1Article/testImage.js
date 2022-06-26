const image = new Image();

function testImage(url, className) {
  image.onload = imageFound;
  image.onerror = imageNotFound;
  image.class = className;
  image.src = url;
  return image;
}

function imageFound() {
  return image.src;
}

function imageNotFound() {
  return 'test'
}

testImage('http://foo.com');

module.exports = testImage;