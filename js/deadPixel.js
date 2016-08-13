/**
 * Insert a dead pixel into the top left-corner of the page
 * Author: Angus Turner
 */
function deadPixel() {
  window.setTimeout(function() {
    $('body').prepend("<div class='pixel'></div>");
  }, 1000);
}
