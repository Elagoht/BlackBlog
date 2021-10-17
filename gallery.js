function closeZoom() {
	zoomdiv.style="display:none;background-color:#0000;cursor:zoom-in;"
}
window.onload=function() {
	var imgs=showcase.getElementsByClassName('img');
	caseimg.style.cursor="zoom-in";
	zoom.style="cursor:zoom-out;";
	caseimg.onclick=function() {
		zoom.src=this.style.backgroundImage.replace(/url\(\"/,"").replace(/\"\)/,"");
		zoomdiv.style="display:flex;background-color:#000000fe;cursor:zoom-out;"
	}
	zoomdiv.onclick=function() {
		closeZoom();
	}
	function change(ix) {
		caseimg.style.backgroundImage=selimage[ix].getElementsByClassName("img")[0].style.backgroundImage;
		galname.innerHTML=selimage[ix].getElementsByClassName("itemname")[0].innerHTML;
	}
	var number;
	var selimage=itemlist.getElementsByClassName('listitem');
	for (var i=selimage.length-1; i>=0; i--) {
		var bg=selimage[i];
		bg.onclick=function() {
			number=Array.prototype.indexOf.call(this.parentElement.children,this);
			change(Array.prototype.indexOf.call(this.parentElement.children,this));
		}
	}
	previous.onclick=function() {
		previmg();
	}
	next.onclick=function() {
		nextimg();
	}
	function nextimg() {
		if (number<selimage.length-1) {number++;}
		else {number=0;}
		change(number);
		zoom.src=caseimg.style.backgroundImage.replace(/url\(\"/,"").replace(/\"\)/,"");
	}
	function previmg() {
		if (number>0) {number--;}
		else {number=selimage.length-1;}
		change(number);
		zoom.src=caseimg.style.backgroundImage.replace(/url\(\"/,"").replace(/\"\)/,"");
	}
	document.addEventListener('keydown', function (evt) {
		if (evt.keyCode===37) {
			previmg();
		}
		if (evt.keyCode===39) {
			nextimg();
		}
		if (evt.keyCode===27) {
			closeZoom();
		}
	});
}