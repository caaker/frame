// 1 month = 2629800000 msec
const defaults = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 2629800000
};

function getPosition(resolve, reject, options = defaults) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  );
}

module.exports = getPosition;