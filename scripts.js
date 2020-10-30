//Menu buttom animation
function menuAnimation(x) {
  x.classList.toggle("change");
}

//Opens and Closes Navbar
var sideNavOpen = 0;
function changeNav() {
  var width = window.innerWidth;
  if (sideNavOpen == 0) {
    if (width > 570) {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
    }
    else {
      document.getElementById("mySidenav").style.width = "250px";
    }
    sideNavOpen = 1
  }
  else if (sideNavOpen == 1) {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    sideNavOpen = 0;
  }
}

//Navbar disapears on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("customNav").style.top = "0";
  } else {
    document.getElementById("customNav").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

function openTab(evt, menuItem) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuItem).style.display = "block";
  evt.currentTarget.className += " active";
}
