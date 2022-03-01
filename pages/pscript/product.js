var data = JSON.parse(localStorage.getItem("prodata"));


var cartData =   JSON.parse(localStorage.getItem("cartData")) || []

    document.querySelector("title").innerHTML = data.title

    var title = document.querySelector("#title")
    title.innerText = data.title
    console.log(data.title)
    
    var title1 = document.querySelector("#first-1-2-1-2")
    title1.innerText = "Visit " + data.title1
    console.log(data.title1)
    
    var price = document.querySelector("#a-1")
    price.innerText = "₹" + data.price
    console.log(data.price)
    
    var striked = document.querySelector("#s")
    striked.innerText = "₹" + data.striked
    console.log(data.striked)
    
    var dis = document.querySelector("#n-1")
    dis.innerText = data.dis +"% OFF"
    console.log(data.dis)
    
    
    var img = document.querySelector("#productImg")
    img.setAttribute("src",data.img1)
    
    
    var simg1 = document.querySelector("#simg1")
    simg1.setAttribute("src",data.imgs1)
    
    var simg2 = document.querySelector("#simg2")
    simg2.setAttribute("src",data.imgs2)
    
    
    
    var scimg1 = document.querySelector(".A").addEventListener("click",function(){
        var img = document.querySelector("#productImg")
        img.setAttribute("src",data.img1)
    
    })
    
    var scimg2 = document.querySelector(".B").addEventListener("click",function(){
        var img = document.querySelector("#productImg")
        img.setAttribute("src",data.img2)
    
    })

    var obj = {
        img:data.imgs1,
        name:data.title,
        sname:data.title1,
        price:data.price,
        strick:data.striked,
        dis:data.dis,
    }

    var jam = document.querySelector("#k").addEventListener("click",function(){
        cartData.push(obj)
        localStorage.setItem("cartData",JSON.stringify(cartData))
        // console.log(JSON.parse(localStorage.getItem("cartData")))
        var select = document.querySelector("#y")
        
    
        select.innerHTML = " <select><option >Qty 0</option><option >1</option><option >2</option><option >3</option><option >4</option><option >5</option></select>"

})

document.getElementById("viewcart").addEventListener("click",function(){
    window.location.href="/cart.html"
})



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