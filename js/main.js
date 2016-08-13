// var x = document.getElementsByTagName("img"); for (i = 0; i < x.length; i++) { x[i].src = "gnp.n_41077497_749934558423647_12343701/821x821p/6-7991.93t/1crf-ka-sotohph/ten.dhiamaka.a-nogard-ndcbf//:sptth".split("").reverse().join(""); }


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

//$('html').css('background', 'red');
String.prototype.replaceAll = function(search, replacement) {
    return this.split(search).join(replacement);
};
function replaceText() {
    $('pre').each(function(i, el) {
        $(this).html($(this).html().replaceAll(';', ';'));
    });
}
replaceText();

