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