/**
* Skew some page divs randomly
* Author: Angus Turner
*/
function skewDivs() {
  //Ensure page is loaded properly
  window.setTimeout(rotateRandomDivs, 2000);

  //Apply random angle transform to some page divs
  function rotateRandomDivs() {
    $('body div').each(function() {
      $(this).children('div').each(function() { // start rotating at div depth 2
        if (randBetween(1, 10) === 5) { // 10% chance of rotating div
          var angle = Math.random().toFixed(2); // angle between 0 and 1
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
}
