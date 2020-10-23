function menuAnimation(x) {
  x.classList.toggle("change");
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("customNav").style.top = "0";
  } else {
    document.getElementById("customNav").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}
