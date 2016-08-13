/**
* Code to simulate faulty-screen when user enters full screen mode
* Author: Angus Turner
*/
function faultyScreen() {
  //Break screen 10 seconds after full-screen is entered
  document.addEventListener('webkitfullscreenchange', function() {
    if (document.webkitFullscreenElement) {
      window.setTimeout(fuckScreen, 10000);
    }
  });

  //Insert SVG overlay and call D3 animate functions
  function fuckScreen() {
    //Insert SVG overlay
    $(':-webkit-full-screen').html("<svg id='break-screen'></svg>");
    var svg = d3.select('#break-screen');

    //Draw fault lines
    drawLines();

    //Make them flicker
    animateFlicker();
  }

  //Function to call flicker function repeatedly while page is full screen
  function animateFlicker() {
    window.setTimeout(function() {
      flicker(function() {
        if (document.webkitFullscreenElement) {
          window.setTimeout(animateFlicker, randBetween(0, 300));
        }
      });
    });
  }

  //Function to black-out some lines
  function flicker(callback) {
    d3.selectAll('.maskLine').each(function(d, i) {
      //10% chance of re-activating (unmasking)
      if (d3.select(this).attr('opacity') == 1) {
        d3.select(this).attr('opacity', 0);
      } else {
        d3.select(this).attr('opacity', 1);
      }
    });
    callback();
  }

  //Draw vertical fault-lines
  function drawLines() {
    //Generate an array 0...Width-1, and shuffle
    var columns = shuffle(range(screen.width));

    //Iterate through pixel columns and apply fault-lines
    columns.forEach(function(i) {
      //Draw colored fault line
      svg.append("line")
        .transition(0)
        .delay(randBetween(1, 300))
        .attr('class', 'faultLine')
        .attr("x1", i)
        .attr("y1", 0)
        .attr("x2", i)
        .attr("y2", screen.height-1)
        .attr("stroke-width", randBetween(1,2))
        .attr("stroke", randHexColor);

      //10% chance of masking black line for flicker effect
      if (randBetween(1, 100) < 10) {
        //Draw colored fault line
        svg.append("line")
          .transition(0)
          .delay(300)
          .attr('class', 'maskLine')
          .attr("x1", i)
          .attr("y1", 0)
          .attr("x2", i)
          .attr("y2", screen.height-1)
          .attr("stroke-width", '1px')
          .attr("stroke", 'black');
      }
    });
  }

  //Check if user is in full screen mode
  function isFullScreen() {
    var fullWidth = (screen.width === window.innerWidth);
    var fullHeight = (screen.height === window.innerHeight);
    return (fullWidth && fullHeight);
  }

  //Random hex color generator
  function randHexColor() {
    return '#'+('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);
  }

  //Function to create an array 0...N-1
  //Source: stackoverflow.com/questions/3746725/
  function range(N) {
    return Array.apply(null, {length: N}).map(Number.call, Number)
  }

  //Function to shuffle an array
  //Source: stackoverflow.com/questions/2450954/
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  //Random number in interval
  function randBetween(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
