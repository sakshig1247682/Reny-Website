gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var tl=gsap.timeline();

tl.to("#page-1 img",{
  height:"80%",
  delay:0.5,
  duration:7
})


tl.to("#nav",{
  y:-150,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#nav",
    // markers:true,
    start:"top -10%",
    end:"top -20%",
    scrub:2,
    
  }
})

tl.to(".paste",
{
  rotate:360,
  duration:1,
  delay:0.5,
  scrollTrigger:{
    trigger:".paste",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top -1500%",
    scrub:3
  }
})

function topi()
{
  var box1=document.querySelector(".box-1");
var h21=document.querySelector(".box-1 h2");
var h31=document.querySelector(".box-1 h3");

var box2=document.querySelector(".box-2");
var h22=document.querySelector(".box-2 h2");
var h32=document.querySelector(".box-2 h3");

var box3=document.querySelector(".box-3");
var h23=document.querySelector(".box-3 h2");
var h33=document.querySelector(".box-3 h3");

var box4=document.querySelector(".box-4");
var h24=document.querySelector(".box-4 h2");
var h34=document.querySelector(".box-4 h3");

var box5=document.querySelector(".box-5");
var h25=document.querySelector(".box-5 h2");
var h35=document.querySelector(".box-5 h3");

var box6=document.querySelector(".box-6");
var h26=document.querySelector(".box-6 h2");
var h36=document.querySelector(".box-6 h3");


box1.addEventListener("mouseenter",function()
{
  h21.style.top="55%";
  h31.style.opacity=1;

})
box1.addEventListener("mouseleave",function()
{
  h21.style.top="85%";
  h31.style.opacity=0;
});

box2.addEventListener("mouseenter",function()
{
  h22.style.top="55%";
  h32.style.opacity=1;

})
box2.addEventListener("mouseleave",function()
{
  h22.style.top="85%";
  h32.style.opacity=0;
})

box3.addEventListener("mouseenter",function()
{
  h23.style.top="55%";
  h33.style.opacity=1;

})
box3.addEventListener("mouseleave",function()
{
  h23.style.top="85%";
  h33.style.opacity=0;
})

box4.addEventListener("mouseenter",function()
{
  h24.style.top="47%";
  h34.style.opacity=1;

})
box4.addEventListener("mouseleave",function()
{
  h24.style.top="85%";
  h34.style.opacity=0;
})

box5.addEventListener("mouseenter",function()
{
  h25.style.top="55%";
  h35.style.opacity=1;

})
box5.addEventListener("mouseleave",function()
{
  h25.style.top="85%";
  h35.style.opacity=0;
})

box6.addEventListener("mouseenter",function()
{
  h26.style.top="55%";
  h36.style.opacity=1;

})
box6.addEventListener("mouseleave",function()
{
  h26.style.top="81%";
  h36.style.opacity=0;
})
}
topi();

var clutter="";
var pg3=document.querySelector("#page-3 h4").textContent;
var split=pg3.split("");
split.forEach(function(elem)
{
  clutter=clutter+`<span>${elem}</span>`
})
document.querySelector("#page-3 h4").innerHTML=clutter;

tl.to("#page-3 h4 span",{
  color:"#F9EEDB",
  stagger:0.3,
  duration:1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page-3 h4",
    // markers:true,
    start:"top 110%",
    end:"top 0%",
    scrub:2
  }
})

tl.to("#page-3 img",{
  y:600,
  delay:1,
  duration:0.8,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page-3 img",
    // markers:true,
    start:"top 55%",
    end:"top -20%",
    scrub:1
  }
})

var clutter="";
var p63=document.querySelector("#page-6 h3").textContent;
var split=p63.split("");
split.forEach(function(dets)
{
  clutter=clutter+`<span>${dets}</span>`
})
document.querySelector("#page-6 h3").innerHTML=clutter;

tl.to("#page-6 h3 span",{
  color:"#F9EEDB",
  stagger:0.3,
  duration:1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#page-6 h3",
    // markers:true,
    start:"top 100%",
    end:"top 10%",
    scrub:4
  }
})

function btn(){
  var btn=document.querySelector(".overlay-4 .btn");
var i=document.querySelector(".overlay-4 .btn .icon1");
var i2=document.querySelector(".overlay-4 .btn .icon-2");

btn.addEventListener("mouseenter",function()
{
  btn.style.color="#F9EEDB";
  btn.style.backgroundColor="black";
  i.style.opacity=0;
  i2.style.opacity=1;
})
btn.addEventListener("mouseleave",function()
{
  btn.style.color="black";
  btn.style.backgroundColor="#F9EEDB";
  i.style.opacity=1;
  i2.style.opacity=0;
 
})
}
btn();

var btn3=document.querySelector(".btn-3");
var i3=document.querySelector(".btn-3 .icon-4");
 btn3.addEventListener("mouseenter",function()
 {
   i3.style.opacity=1
   btn3.style.border='2px solid white';
   
 })
 btn3.addEventListener("mouseleave",function()
 {
   i3.style.opacity=0;
   btn3.style.border='3px solid #F9EEDB';
 })

 function elem()
 {
  var elem=document.querySelector(".elem-1");
 var elem2=document.querySelector(".elem-2");
  var eimg=document.querySelector(".elem-1 img");
  var eimg2=document.querySelector(".elem-2 img");
  var over=document.querySelector(".overlay-5");
  var over2=document.querySelector(".overlay-6");
  var grow=document.querySelector(".grow-1");
  var grow2=document.querySelector(".grow-2");

elem.addEventListener("mouseenter",function()
{
  eimg.style.width="105%";
  eimg.style.height="100%";
  over.style.backgroundColor="rgba(0, 0, 0, 0.091)";
  grow.style.width="100%";
})

elem.addEventListener("mouseleave",function()
{
  eimg.style.width="100%";
  eimg.style.height="95%";
  over.style.backgroundColor="rgba(0, 0, 0, 0.339)";
  grow.style.width="0%";
})

elem2.addEventListener("mouseenter",function()
{
  eimg2.style.width="105%";
  eimg2.style.height="100%";
  over2.style.backgroundColor="rgba(0, 0, 0, 0.091)";
  grow2.style.width="100%";

})

elem2.addEventListener("mouseleave",function()
{
  eimg2.style.width="100%";
  eimg2.style.height="95%";
  over2.style.backgroundColor="rgba(0, 0, 0, 0.339)";
  grow2.style.width="0%";
})

 }
 elem();

function fill()
{
  var one=document.querySelector(".one");
var grow3=document.querySelector(".grow-3");

var two=document.querySelector(".two");
var grow4=document.querySelector(".grow-4");

var three=document.querySelector(".three");
var grow5=document.querySelector(".grow-5");

var four=document.querySelector(".four");
var grow6=document.querySelector(".grow-6");

var five=document.querySelector(".five");
var grow7=document.querySelector(".grow-7");

var six=document.querySelector(".six");
var grow8=document.querySelector(".grow-8");

one.addEventListener("mouseenter",function()
{
  grow3.style.width="121%";
  one.style.backgroundColor="black";
})
one.addEventListener("mouseleave",function()
{
  grow3.style.width="0%";
  one.style.backgroundColor="#2A2A29";
})

two.addEventListener("mouseenter",function()
{
  grow4.style.width="121%";
  two.style.backgroundColor="black";
})
two.addEventListener("mouseleave",function()
{
  grow4.style.width="0%";
  two.style.backgroundColor="#2A2A29";
})

three.addEventListener("mouseenter",function()
{
  grow5.style.width="121%";
  three.style.backgroundColor="black";
})
three.addEventListener("mouseleave",function()
{
  grow5.style.width="0%";
  three.style.backgroundColor="#2A2A29";
})


four.addEventListener("mouseenter",function()
{
  grow6.style.width="121%";
  four.style.backgroundColor="black";
})

four.addEventListener("mouseleave",function()
{
  grow6.style.width="0%";
  four.style.backgroundColor="#2A2A29";
})


five.addEventListener("mouseenter",function()
{
  grow7.style.width="121%";
  five.style.backgroundColor="black";
})

five.addEventListener("mouseleave",function()
{
  grow7.style.width="0%";
  five.style.backgroundColor="#2A2A29";
})


six.addEventListener("mouseenter",function()
{
  grow8.style.width="121%";
six.style.backgroundColor="black";
})

six.addEventListener("mouseleave",function()
{
  grow8.style.width="0%";
  six.style.backgroundColor="#2A2A29";
})
}
fill();

var gol=document.querySelector(".gol");
var gol1=document.querySelector(".gol-1");
gol1.addEventListener("mousemove",function(e){
  gol.style.opacity=1;
  gol.style.top=(e.y+170)+"px";
  gol.style.left=e.x+"px";
})

gol1.addEventListener("mouseenter",function(e){
  gol.style.opacity=1;
  gol.style.top=e.y+"px";
  gol.style.left=e.x+"px";
})
gol1.addEventListener("mouseleave",function(e){
  gol.style.opacity=0;
  
})