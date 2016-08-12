$('html').css('background', 'red');
console.log('test');

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

chance = Math.random();
if (chance * 10 > 9) {
	var img = document.getElementsByTagName("img");
    for(var i=0;i<img.length;i++)
    {
		img[i].style.transition = 'all 2s linear';
        img[i].style.position= 'relative'; 
        img[i].style.left = '50px';  
		//for (x = 0; x <= 10; x++) {
		//	img[1].style.position = 'relative';
		//	img[1].
		//	img[1].style.left = parseInt(img[1].style.left) + 10 + 'px';
		//}
    } 
}
console.log(chance * 10);