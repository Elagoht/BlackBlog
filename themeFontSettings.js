function serif() {
	document.getElementById("fontfam").innerHTML = "article * {font-family: 'Noto Serif', serif;}"
	sansfont.style.display = "flex";
	seriffont.style.display = "none";
	localStorage["fontFamily"] = "serif";
}
function sans() {
	document.getElementById("fontfam").innerHTML = "article * {font-family:'Ubuntu', sans-serif;}"
	sansfont.style.display = "none";
	seriffont.style.display = "flex";
	localStorage["fontFamily"] = "sansSerif";
}
if (localStorage["fontFamily"] == "sansSerif") { sans(); }
if (localStorage["fontFamily"] == "serif") { serif(); }
function left() {
	document.getElementById("fontalign").innerHTML = "article * {text-align:left;}"
	leftalign.style.display = "none";
	justifyalign.style.display = "flex";
	localStorage["textAlign"] = "left";
}
function justify() {
	document.getElementById("fontalign").innerHTML = "article * {text-align:justify;}"
	justifyalign.style.display = "none";
	leftalign.style.display = "flex";
	localStorage["textAlign"] = "justify";
}
if (localStorage["textAlign"] == "justify") { justify(); }
if (localStorage["textAlign"] == "left") { left(); }
function isDarkTheme(isDark) {
	localStorage["isDarkTheme"] = isDark;
	if (isDark == 1) {
		darkTheme.href = "design-dark.css";
		darktheme.style.display = "none";
		lighttheme.style.display = "flex";
		androidtabcolor.content = "#202020";
		iostabcolor.content = "default";
		wphonetabcolor.content = "#202020";
	}
	if (isDark == 0) {
		darkTheme.href = "";
		lighttheme.style.display = "none";
		darktheme.style.display = "flex";
		androidtabcolor.content = "#222";
		iostabcolor.content = "black-translucent";
		wphonetabcolor.content = "#222";
	}
}
isDarkTheme(localStorage["isDarkTheme"]);
fs = localStorage["fontSize"] !== undefined ? localStorage["fontSize"] : 12;
function resizeFont(size) {
	document.getElementById("fontsize").innerText = `article p {font-size:${size}pt;}
article h6 {font-size:${size}pt;}
article h5 {font-size:${size + 1}pt;}
article h4 {font-size:${size + 1}pt;}
article h3 {font-size:${size + 2}pt;}
article h2 {font-size:${size + 2}pt;}
article h1 {font-size:${size + 3}pt;}
article figcaption {font-size:${size - 1}pt;}
#articletitle {font-size:${size + 3}pt;}`
	localStorage["fontSize"] = fs;
}
smaller = function () {
	if (fs > 8) fs--;
	resizeFont(fs);
}
bigger = function () {
	if (fs < 20) fs++;
	resizeFont(fs);
}
function resetSize() {
	fs = 12;
	resizeFont(12);
}
bigger()
smaller()