gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var loader = gsap.timeline()
loader.to("#some-text h5",{
  y:-89,
  delay:0.5,
  duration:1.7
})
.to("#text-animation",{
  y:-50,
  rotateX:-90,
  opacity:0,
  duration:0.8
})
.to("#loader1",{
  height:0,
  duration:.8,
  delay:.5
})
.to("#loader2",{
  height:0,
  duration:.8,
 
},"-=0.3")
.to("#loader3",{
  height:0,
  duration:.8,
  
},"-=1")
.to("#loader4",{
  height:0,
  duration:.8,
  
},"-=0.7")
.to("#loader",{
  top:"-100vh",
  duration:0.1
})
.from("#page1 h1",{
  y:200,
  opacity:0,
  stagger:.5,
  duration:1,
  delay:.5
})
.from("#page1 h2",{
  opacity:0
})
.from("#nav",{
  opacity:0,
  
  
})


document.querySelector("body").addEventListener("mousemove",function(dets){
  document.querySelector("#cursor").style.left=`${dets.x }px`;
  document.querySelector("#cursor").style.top=`${dets.y}px`;
  



})
var flag = 0
var nav2 = document.querySelector("#nav-part2")
var menu = document.querySelector("#menu")
var line1 =document.querySelector("#line1")
var line2 =document.querySelector("#line2")
var cursor =document.querySelector("#cursor")


nav2.addEventListener("click",function(){
  if(flag == 0){
    menu.style.opacity=1
   
    menu.style.display= "block"
    line1.style.rotate = "44deg"
   line2.style.rotate = "-40deg"  
      gsap.from("#menu h1",{
      y:150,
      duration:2,
      delay:1,
      stagger:1,
      opacity:0,
      
      scrollTrigger:{
       trigger:"#menu h1",
       scroller:"#main",
      
       
      }
    })
    flag=1
  }
  else{
    menu.style.opacity=0
    menu.style.display= "none"
    line1.style.rotate = "0deg"
   line2.style.rotate = "0deg" 
    flag=0

  }
})
nav2.addEventListener("mouseenter",function(){
     cursor.style.scale = 2
})
nav2.addEventListener("mouseleave",function(){
  cursor.style.scale = 1
})
document.querySelector("#nav h3").addEventListener("mouseenter",function(){
  cursor.style.scale = 2
})
document.querySelector("#nav h3").addEventListener("mouseleave",function(){
  cursor.style.scale = 1
})
document.querySelector("#one").addEventListener("mouseenter",function(){
  cursor.style.scale = 2
})
document.querySelector("#one").addEventListener("mouseleave",function(){
  cursor.style.scale = 1
})
document.querySelector("#two").addEventListener("mouseenter",function(){
  cursor.style.scale = 2
})
document.querySelector("#two").addEventListener("mouseleave",function(){
  cursor.style.scale = 1
})
document.querySelector("#three").addEventListener("mouseenter",function(){
  cursor.style.scale = 2
})
document.querySelector("#three").addEventListener("mouseleave",function(){
  cursor.style.scale = 1
})


gsap.to("#page1",{


  
scrollTrigger:{
  trigger:"#page1",
  scroller:"#main",
  // markers:true,
  end:"top -200%",
  start:"top 0",
  pin:true,

  scrub:3,

}
})



gsap.to("#page1 #box-img",{
    y:-570,
  
    
  scrollTrigger:{
    trigger:"#box-img",
    scroller:"#main",
    // markers:true,
    end:"top 0",
    start:"top 90%",
  
    scrub:3,
 
  }
})
gsap.to("#page1 #box-img",{
  width:"100%",
  height:"100vh",
  marginTop:"-11vw",
 scrollTrigger:{
  trigger:"#box-img",
  scroller:"#main",
  //  markers:true,
  end:"top -50%",
  start:"top 20%",

  scrub:3,

}
})


gsap.from("#page2 h1", {
  rotate: 5,
  y: 100,
  opacity: 0,
  stagger: 1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "#main",
    // markers: true,
    start: "top 60%",
    end: "top 35%",
    scrub: 3
  }
})



var page3TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    // markers:true,
    start:"top 0",
    end:"top -150%",
    scrub:2,
    pin:true
  }
}) 
page3TL.from("#page3 h1",{
  scale: 1.92,
  lineHeight:"30vw"
},"anim")
page3TL.from("#page3 h2",{
  scale: 1.3,
  lineHeight:"43vw"
},"anim")
page3TL.to("#page4",{
  y:"-120vh"
},"anim")



var allbox = document.querySelectorAll(".boxes")
allbox.forEach(function(e){
  e.addEventListener("mouseenter",function(){
    document.querySelector("#cursor").innerHTML="More"
    document.querySelector("#cursor").style.scale=3.5
    document.querySelector("#cursor").style.backgroundColor= "#fff"
    document.querySelector("#cursor").style.borderColor= "#fff"


  })
  e.addEventListener("mouseleave",function(){
    document.querySelector("#cursor").innerHTML=""
    document.querySelector("#cursor").style.scale=1
    document.querySelector("#cursor").style.backgroundColor= "transparent"
    document.querySelector("#cursor").style.borderColor= "#e1e1e1"


  })

})

var page5TL = gsap.timeline({
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    // markers:true,
    
    pin:true,
    scrub:2

  }
}) 
page5TL.to("#page5 h1",{
  scale:4,
  filter:"blur(20px)",
  opacity:0
})
page5TL.to("#page5 #para",{
  
  opacity:1
})



gsap.from("#footer h1",{
  y:170,
  duration:1,
  stagger:.1,
  
  scrollTrigger:{
   trigger:"#footer h1",
   scroller:"#main",
  //  markers:true,
   start:"top 100%",
   end:"top 70% ",
   
  }
})

document.querySelector(" #page4 button").addEventListener("mouseenter",function(){
  document.querySelector("#cursor").style.scale = 2
  
})
document.querySelector(" #page4 button").addEventListener("mouseleave",function(){
  document.querySelector("#cursor").style.scale = 1
  
})


document.querySelector(" #line-part2 button").addEventListener("mouseenter",function(){
  document.querySelector("#cursor").style.scale = 2
  
})
document.querySelector("#line-part2 button").addEventListener("mouseleave",function(){
  document.querySelector("#cursor").style.scale = 1
  
})


gsap.from("#box1 img",{
  height:"200%",
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    // markers:true,
    start:"top 162%",
    end:"top 158%",
    scrub:2
  }
})