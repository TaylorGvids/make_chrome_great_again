function moveImages(dist) {
	chance = Math.random();
	if (chance * 10 > 10) {
		var img = document.getElementsByTagName("img");
		for(var i=0;i<img.length;i++)
		{
			img[i].style.transition = 'all 2s linear';
			img[i].style.position= 'relative';
			img[i].style.left = '50px';
		} 
	}
}