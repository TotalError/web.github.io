window.onload= function(){
	var slide_box = document.getElementById('slide_box');
	var	images = slide_box.getElementsByTagName('img');
	var	li = slide_box.getElementsByTagName('li');
	var c=0;
	var timer = setInterval(run,2000);
	function run(){
		for(var i=0,len=images.length; i<len;  i++ ) {
			images[i].style.display ='none';
			li[i].style.background = 'white';
		}
		if (c==5) {
			c=0;
		}
			images[c].style.display ='block';
			li[c].style.background='#A10000';
		
			c++;
	}

	for (var i = 0,len=li.length; i<len; i++) {
			li[i].xuhao=i;
			li[i].onmouseover = function(){
				c = this.xuhao;
				clearInterval(timer);
				for(var i=0,len=images.length; i<len;  i++ ) {
					images[i].style.display ='none';
					li[i].style.background = 'white';
				}
				images[c].style.display='block';
				li[c].style.background='#A10000';
			}
			li[i].onmouseout = function(){
				timer = setInterval(run,1000);
			}
	}
}