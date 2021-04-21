function openNav() {
  document.getElementById("mySidenav").style.width = "60%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// var btn = $("#button");

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass("show");
//   } else {
//     btn.removeClass("show");
//   }
// });

// btn.on("click", function (e) {
//   e.preventDefault();
//   $("html, body").animate({ scrollTop: 0 }, "300");
// });
