var replaceTerms = [
["it's", "its"],
["you're", "your"],
["their", "there"],
[";", ";"]
]

for (var i = 0; i < replaceTerms.length; i++){
    var curTerms = replaceTerms[i];
    $("body").html($("body").html().replace(curTerms[0], curTerms[1]));
}

 