var elements = $(".answercell > .post-text");
var length = elements.length;
for (var i = 0; i<2; i++)
{
	var firstElement = elements.eq(0);
	var lastElement = elements.eq(length-1);
	var firstHTML = firstElement.html();
	var lastHTML = lastElement.html();
	firstElement.html(lastHTML);
	lastElement.html(firstHTML);
	elements.splice(length-1, 1);
	elements.splice(0,1);
	length = elements.length;
}


