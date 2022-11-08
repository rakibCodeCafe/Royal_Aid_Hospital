var X = document.getElementById("login");
var Y = document.getElementById("register");
var Z = document.getElementById("btn");

function register(){
    X.style.left ="-400px";
    Y.style.left ="50px";
    Z.style.left ="110px";

}
function login(){
    X.style.left ="50px";
    Y.style.left ="400px";
    Z.style.left ="0px";

}
// ** login eyes slash or eyes open for password started here

function myFunction(){
  var logShowHide = document.getElementById("myInput");
  if(logShowHide.type === "password"){
    logShowHide.type = "text";
    document.getElementById('hide').style.display = "inline-block";
    document.getElementById('show').style.display = "none";
  }
  else{
    logShowHide.type = "password";
    document.getElementById('hide').style.display = "none";
    document.getElementById('show').style.display = "inline-block";
  }
}
// ** login eyes slash or eyes open for password completed here
// ** resister eyes slash or eyes open for password started here
function resFunction(){
  var logShowHide = document.getElementById("resInput");
  if(logShowHide.type === "password"){
    logShowHide.type = "text";
    document.getElementById('Hide').style.display = "inline-block";
    document.getElementById('Show').style.display = "none";
  }
  else{
    logShowHide.type = "password";
    document.getElementById('Hide').style.display = "none";
    document.getElementById('Show').style.display = "inline-block";
  }
}
// ** resister eyes slash or eyes open for password completed here
// login span active
const loginLink = document.querySelector(".loginLink");
const loginFormBox = document.querySelector(".loginFormBox");

loginLink.addEventListener("click", () =>{
    loginLink.classList.toggle("active");
    loginFormBox.classList.toggle("active");
})

// login issue done

// beefburger starts here



// beefburger ends here

// slider starts here
let slides = document.querySelectorAll('.slideContainer');
let index = 0;
// nxt function
function next (){
    slides[index].classList.remove('active');
    index = (index+1) % slides.length;
    slides[index].classList.add('active');
}
// function previous
function prev (){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}
// autoplay 
setInterval(next,90000);
// slider ends here



// expert Slider
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        autoplay:true,
        loop:true,
        mouseDrag:true,
        touchDrag:true,
        pullDrag:true,
        freeDrag:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
             0:{
                items:1
             },
             767:{
                items:2
             },
             990:{
                items:3
             },
             1200:{
                items:4
             },
             1201:{
                items:4
             },
        }
    });
});

// loader

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();
//   loader


// appointment preview

let doctorsPreview = document.querySelector('.doctorsPreview');
let preview = doctorsPreview.querySelectorAll('.preview');

document.querySelectorAll('.mainContainer .doctor').forEach(doctor =>{
  doctor.onclick = () =>{
    doctorsPreview.style.display = 'flex';
    let name = doctor.getAttribute('data-name');
    preview.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

preview.forEach(close =>{
  close.querySelector('.fa-xmark').onclick = () =>{
    close.classList.remove('active');
    doctorsPreview.style.display = 'none';
  };
});

// appointment preview compleeted


// loadmore button started 

let loadMoreBtn = document.querySelector('#loadMore');
let currentItem = 4;

loadMoreBtn.onclick = () =>{
   let boxes = [...document.querySelectorAll('.doctorContainer .mainContainer .doctor')];
   for (var i = currentItem; i < currentItem + 4; i++){
      boxes[i].style.display = 'inline-block';
   }
   currentItem += 4;

   if(currentItem >= boxes.length){
      loadMoreBtn.style.display = 'none';
   }
}


// * loadmore done


// ** auto typped js
var typed = new Typed (".autoTypped", {
  strings:["Confused... whome to choose ?", "Just Write Us What You Need...", "You'll Find The Best Match For You..."],
  typespeed:200,
  startDelay:200,
  backSpeed:200,
  smartBackspace:!100,
  loop: true
})


// * read more button

var i = 0;
function read(){
  if(!i){
    document.getElementById("more").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("read").innerHTML="read less";
    i=1;
  }
  else{
    document.getElementById("more").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("read").innerHTML="read more";
    i=0;
  }
} 
var i = 0;
function more(){
  if(!i){
    document.getElementById("extra").style.display = "inline";
    document.getElementById("points").style.display = "none";
    document.getElementById("extend").innerHTML="read less";
    i=1;
  }
  else{
    document.getElementById("extra").style.display = "none";
    document.getElementById("points").style.display = "inline";
    document.getElementById("extend").innerHTML="read more";
    i=0;
  }
} 