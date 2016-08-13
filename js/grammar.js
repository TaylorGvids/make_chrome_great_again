// [original, new, frequency (optional)] 
var replaceTerms = [
    ["it's", "its"],
    ["you're", "your"],
    ["their", "there"],
    ["they're", "there"],
    ["you'll", "youll"],
    ["where", "were"],
    // ["Hillary", "Donald"],
    // ["Clinton", "Trump"],
    // ["Donald Trump", "Donald Duck", 1.0],
    [/Donald J?(ohn)?\.?\s?Trump/, "Donald Duck", 1.0],
    ["Lorem", "Ipsum", 0.01],
    ["Microsoft", "Apple", 0.01]
    // [";", ";"]
]

//Floating point number from 0 to 1 representing what % of the time this should show up.
var defaultFreq = 0.1;
// defaultFreq = 1.0;

console.log("grammar start");
$("p, li").each(function() {
    for (var i = 0; i < replaceTerms.length; i++) {
        if (Math.random() <= (replaceTerms[i][2] || defaultFreq))
            this.innerHTML = this.innerHTML.replace(replaceTerms[i][0], replaceTerms[i][1]); // Currently will only replace first instance in each tag, but should be good enough.
    }
});
console.log("grammar end");