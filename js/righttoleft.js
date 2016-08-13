//Make text appear normal, but it's actually in right-to-left
var defaultFreq = 0.1;
defaultFreq = 1;
$("p").each(function(){
    //If the only child of this is text (so it doesn't break tags underneath)
    if ($(this).contents().length == 1 && $(this).contents()[0].nodeType == 3){
        if (Math.random() <= defaultFreq){
            var text = $(this).text();
            var reversed = text.split("").reverse().join("");
            $(this).text(reversed);
            // $(this).attr("dir", "rtl");
            $(this).css("direction", "rtl");
            $(this).css("unicode-bidi", "bidi-override");
            $(this).css("text-align", "left");
        }
    }
});