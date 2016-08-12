//Break random hyperlinks
var defaultFreq = 0.1;
// defaultFreq = 1;
$("a").each(function(){
    if (Math.random() <= defaultFreq){
        $(this).attr('href', '#');
    }
});