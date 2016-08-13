//After a random amount of time, apply a video buffering logo
window.setTimeout(videoBuffer, randBetween(2000, 6000));

//
function videoBuffer() {
  $('.ytp-spinner').css('display', 'block');
  $('.ytp-spinner-message');
}

//Random number in interval
function randBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
