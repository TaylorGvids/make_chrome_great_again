//

if (window.location.href.match(/.*www\.google\.com.*\/search.*/)){
    console.log("ruin google start");
    var things = $("div.g");
    for (var i = 0; i < 5; i++){
        things[i].parentNode.removeChild(things[i]);
    }
}
console.log("ruin google end");