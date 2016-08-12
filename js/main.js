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
