function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


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


document.getElementById("chead").addEventListener("click",function(){
    window.location.href= "/cart.html"
})