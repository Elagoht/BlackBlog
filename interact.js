var isOpen=false;
function sidemenu() {
    if (isOpen==false) {
        headnav.style.left="0";
        closediv.style.width="100%";
        closediv.style.opacity="1";
        closediv.style.transition="all .3s, width 0s";
    }
    if (isOpen==true) {
        headnav.style.left="-285px";
        closediv.style.width="0";
        closediv.style.opacity="0";
        closediv.style.transition="all .3s, width 0s linear .3s";
    }
    isOpen=!isOpen;
}
document.getElementsByTagName("body")[0].onresize=function() {
    if (document.getElementsByTagName("body")[0].offsetWidth>1024) {
        headnav.style.left="-285px";
        closediv.style.width="0";
        isOpen=false;
    }
}