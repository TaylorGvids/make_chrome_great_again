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