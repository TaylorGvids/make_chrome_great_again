//Sometimes makes page use comic sans
var defaultFreq = 0.1;
// defaultFreq = 1;
$("p").each(function(){
    if (Math.random() <= defaultFreq)
        $(this).css('font-family', '"Comic Sans MS"');
});