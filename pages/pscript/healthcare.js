
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//     onscroll function  //////////////////////////////////////////////////////
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.height = "80px";
    document.querySelector(".overflowbar").style.visibility = "hidden"
    // console.log(document.querySelector(".overflowbar").innerHTML)
} else {
    document.querySelector(".navbar").style.height = "123px";
    document.querySelector(".overflowbar").style.visibility = "visible"
}
}
//  //      onscroll function  end //////////////////////////////////////////////////