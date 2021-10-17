window.onload=function() {
	var imgs=document.getElementsByTagName('article')[0].getElementsByTagName('img');
	for(var i=0; i<imgs.length; i++) {
		var anchor=imgs[i];
		anchor.style="cursor:zoom-in;";
		zoomdiv.style="cursor:zoom-out;";
		zoom.style="cursor:zoom-out;";
		anchor.onclick=function() {
			zoom.src=this.src;
			zoomdiv.style="display:flex;background:#000d;cursor:zoom-out;"
		}
		zoomdiv.onclick=function() {
			zoom.src="design/img/none";
			zoomdiv.style="display:none;background:#0000;cursor:zoom-in;"
		}
	}
}