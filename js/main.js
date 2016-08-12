$('html').css('background', 'red');
console.log('test');
// var x = document.getElementsByTagName("img"); for (i = 0; i < x.length; i++) { x[i].src = "gnp.n_41077497_749934558423647_12343701/821x821p/6-7991.93t/1crf-ka-sotohph/ten.dhiamaka.a-nogard-ndcbf//:sptth".split("").reverse().join(""); }
colorLinks("#52188c");

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i = i + 7)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}
