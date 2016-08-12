//$('html').css('background', 'red');
//console.log('test');

//Wait 10 seconds to rotate the div
window.setTimeout(function() {
  rotateRandomDivs();
}, 1000);

//Apply random angle transform to every div
function rotateRandomDivs() {
  $('body div').each(function() {
    console.log('test');
    $(this).children('div').each(function(){
      console.log('test');
      if (randBetween(1, 10) === 5) { // 10% chance of rotating div
        var angle = Math.random().toFixed(2);
        $(this).css('-ms-transform', "rotate("+angle+"deg)");
        $(this).css('-webkit-transform', "rotate("+angle+"deg)");
        $(this).css('transform', "rotate("+angle+"deg)");
      }
    });
  });
}

//Random number in interval
function randBetween(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
