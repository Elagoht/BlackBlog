var article=document.getElementsByTagName("article")[0];
var countable=article.getElementsByTagName("p");
var count=0;
var j=article.getElementsByTagName('p');
for (var i=j.length-1; i>=0; i--) {
    count+=j[i].innerHTML.split(" ").length;
}
var j=article.getElementsByTagName('h1');
for (var i=j.length-1; i>=0; i--) {
    count+=j[i].innerHTML.split(" ").length;
}
var j=article.getElementsByTagName('h2');
for (var i=j.length-1; i>=0; i--) {
    count+=j[i].innerHTML.split(" ").length;
}
var j=article.getElementsByTagName('h3');
for (var i=j.length-1; i>=0; i--) {
    count+=j[i].innerHTML.split(" ").length;
}
var j=article.getElementsByTagName('h4');
for (var i=j.length-1; i>=0; i--) {
    count+=j[i].innerHTML.split(" ").length;
}
var j=article.getElementsByTagName('h5');
for (var i=j.length-1; i>=0; i--) {
    count+=j[i].innerHTML.split(" ").length;
}
var j=article.getElementsByTagName('h6');
for (var i=j.length-1; i>=0; i--) {
    count+=j[i].innerHTML.split(" ").length;
}
function readtime() {
    slow=Math.ceil(count/160)
    fast=Math.ceil(count/220)
    unit=slow==fast&slow==1?"min":"mins"
    dur=slow==fast?fast:fast+"-"+slow
    return dur+" "+unit
}
document.getElementById("readtime").innerHTML=readtime();