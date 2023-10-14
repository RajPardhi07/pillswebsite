function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

init();


var cur = document.querySelector("#cursor")


document.addEventListener("mousemove", function (dets) {

  cur.style.top = `${dets.clientY}px`
  cur.style.left = `${dets.clientX}px`
})


function menu() {
  var flag = 0

  document.querySelector("#close")
  .addEventListener("click", function(){
    if(flag == 0) {
      document.querySelector("#close>.dob1:nth-child(1)").style.transform = `rotate(40deg)`
      document.querySelector("#close>.dob1:nth-child(2)").style.transform = `rotate(-35deg) translateY(-10px) translateX(7px)`
      document.querySelector("#close>.dob1:nth-child(1)").style.backgroundColor = "#DEFF00"
      document.querySelector("#close>.dob1:nth-child(2)").style.backgroundColor = "#DEFF00"


      document.querySelector("#loader").style.top = "0%"
      flag = 1

    }
    else{

      document.querySelector("#close>.dob1:nth-child(1)").style.transform = `rotate(0deg)`
      document.querySelector("#close>.dob1:nth-child(2)").style.transform = `rotate(0deg) translateY(0px) translateX(0px)`
      document.querySelector("#close>.dob1:nth-child(1)").style.backgroundColor = "white"
      document.querySelector("#close>.dob1:nth-child(2)").style.backgroundColor = "white"


      document.querySelector("#loader").style.top = "-100%"
      flag = 0

    }
  })
}
menu()



function ver3() {
  // var h = document.querySelector("#ver2 h2")
  // var home = document.querySelector("#home")


  // h.addEventListener("mouseenter", function () {

  //   home.style.opacity = 1
  // })

  // h.addEventListener("mouseleave", function () {


  //   home.style.opacity = 0
  // })

  var vi = document.querySelector("#vi")
  var vision = document.querySelector("#vision")

  vi.addEventListener("mouseenter", function () {
    vision.style.opacity = 1
    vi.style.opacity = 1
    h.style.opacity = 0.6

  })

  vi.addEventListener("mouseleave", function () {
    vision.style.opacity = 0
    vi.style.opacity = 0.6
    h.style.opacity = 1


  })


  var co = document.querySelector("#co")
  var contact = document.querySelector("#contact")

  co.addEventListener("mouseenter", function () {
    contact.style.opacity = 1
    co.style.opacity = 1
    h.style.opacity = 0.6

  })

  co.addEventListener("mouseleave", function () {
    contact.style.opacity = 0
    co.style.opacity = 0.6
    h.style.opacity = 1


  })


  var ab = document.querySelector("#ab")
  var about = document.querySelector("#about")

  ab.addEventListener("mouseenter", function () {
    about.style.opacity = 1
    ab.style.opacity =1 
    h.style.opacity = 0.6

  })

  ab.addEventListener("mouseleave", function () {
    about.style.opacity = 0
    ab.style.opacity = 0.6
    h.style.opacity = 1

  })


  var service = document.querySelector("#service")
  var se = document.querySelector("#se")

  se.addEventListener("mouseenter", function () {
    service.style.opacity = 1
    h.style.opacity = 0.6
    se.style.opacity = 1

  })

  se.addEventListener("mouseleave", function () {
    service.style.opacity = 0
    h.style.opacity = 1

    se.style.opacity = 0.6
  })


  var model = document.querySelector("#model")
  var mo = document.querySelector("#mo")

  mo.addEventListener("mouseenter", function () {
    model.style.opacity = 1
    mo.style.opacity = 1
    h.style.opacity = 0.6

  })

  mo.addEventListener("mouseleave", function () {
    model.style.opacity = 0
    mo.style.opacity = 0.6
    h.style.opacity = 1


  })






}

ver3();



function pg1() {

  var tl = gsap.timeline();
  tl.from("#center h1", {
    y: 100,
    opacity: 0,
    duration: 1.1,

  })


    .from("#center h4", {
      y: 100,
      opacity: 0,
      duration: 1.1,

    })

    .from(".nav-l", {
      y: -100,
      opacity: 0,
      stagger: 0.25,
      duration: 0.8
    })


    .from(".nav-r", {
      y: -100,
      opacity: 0,
      stagger: 0.25,
      duration: 0.8
    })
}

pg1();





function pg2() {
  var pg2 = document.querySelector("#page2")

  pg2.addEventListener("mouseenter", function () {
    cur.style.width = "120px",
      cur.style.height = "120px"
    cur.innerHTML = "VIEW"
    cur.style.backgroundColor = "#DEFF00"
  })

  pg2.addEventListener("mouseleave", function () {
    cur.style.width = "28px",
      cur.style.height = "28px"
    cur.innerHTML = ""
    cur.style.backgroundColor = "white"

  })
}

pg2();


function pg3() {

  gsap.from("#right-page3 h4", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#right-page3 h4",
      scroller: "#main",
      start: "top 70%",
      end: "top 69%",
      scrub: 3,
    }
  })

  gsap.from("#right-page3 h3", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
      trigger: "#right-page3 h3",
      scroller: "#main",
      start: "top 70%",
      end: "top 69%",
      scrub: 3,
    }
  })
  gsap.from("#left-page3 video", {
    x: -100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#right-page3 h4",
      scroller: "#main",
      start: "top 70%",
      end: "top 69%",
      scrub: 3,

    }
  })

  gsap.from("#cir", {
    x: 300,
    backgroundColor: "black",
    rotate: "360deg",
    duration: 2.3,
    deley: 1.2,
    scrollTrigger: {
      trigger: "#cir",
      scroller: "#main",
      start: "top 70%",
      end: "top 69%",
      scrub: 3,
    }
  })




}


pg3();


function pg5() {

  var line1 = document.querySelector("#line1")
  var elem1 = document.querySelector("#elem1")
  var rr = document.querySelector(".rr")

  line1.addEventListener("mouseenter", function () {
    cur.style.width = "140px"
    cur.style.height = "140px"
    cur.innerHTML = "See Project"
    elem1.style.opacity = 1
    rr.style.opacity = 1

  })

  line1.addEventListener("mouseleave", function () {
    cur.style.width = "28px"
    cur.style.height = "28px"
    cur.innerHTML = ""
    elem1.style.opacity = 0
    rr.style.opacity = 0


  })
  var line2 = document.querySelector("#line2")
  var elem2 = document.querySelector("#elem2")
  var rr2 = document.querySelector(".rr2")

  line2.addEventListener("mouseenter", function () {
    cur.style.width = "140px"
    cur.style.height = "140px"
    cur.innerHTML = "See Project"
    elem2.style.opacity = 1
    rr2.style.opacity = 1

  })

  line2.addEventListener("mouseleave", function () {
    cur.style.width = "28px"
    cur.style.height = "28px"
    cur.innerHTML = ""
    elem2.style.opacity = 0
    rr2.style.opacity = 0


  })


  var line3 = document.querySelector("#line3")
  var elem3 = document.querySelector("#elem3")
  var rr3 = document.querySelector(".rr3")

  line3.addEventListener("mouseenter", function () {
    cur.style.width = "140px"
    cur.style.height = "140px"
    cur.innerHTML = "See Project"
    elem3.style.opacity = 1
    rr3.style.opacity = 1

  })

  line3.addEventListener("mouseleave", function () {
    cur.style.width = "28px"
    cur.style.height = "28px"
    cur.innerHTML = ""
    elem3.style.opacity = 0
    rr3.style.opacity = 0


  })

  var line4 = document.querySelector("#line4")
  var elem4 = document.querySelector("#elem4")
  var rr4 = document.querySelector(".rr4")

  line4.addEventListener("mouseenter", function () {
    cur.style.width = "140px"
    cur.style.height = "140px"
    cur.innerHTML = "See Project"
    elem4.style.opacity = 1
    rr4.style.opacity = 1

  })

  line4.addEventListener("mouseleave", function () {
    cur.style.width = "28px"
    cur.style.height = "28px"
    cur.innerHTML = ""
    elem4.style.opacity = 0
    rr4.style.opacity = 0


  })




}


pg5();

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page6",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 49%",
    scrub: 3
  }
})
tl5.to("#page6", {
  backgroundColor: "#fff"
})


var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page7",
    scroller: "#main",
    // markers:true,
    start: "30% 50%",
    end: "30% 49%",
    scrub: 3
  }
})
tl6.to("#page7", {
  backgroundColor: "black",
})
tl6.to("#page7 h2", {
  color: "white"
})


function pg8() {

  var over = document.querySelector(".over")
  var over2 = document.querySelector(".over2")
  var over3 = document.querySelector(".over3")
  var over4 = document.querySelector(".over4")
  var over5 = document.querySelector(".over5")

  var x1 = document.querySelector(".yo:nth-child(1)")
  var x2 = document.querySelector(".yo:nth-child(2)")
  var x3 = document.querySelector(".yo:nth-child(3)")
  var x4 = document.querySelector(".yo:nth-child(4)")
  var x5 = document.querySelector(".yo:nth-child(5)")


  x1.addEventListener("mouseenter", function () {
    over.style.opacity = 1
  })

  x1.addEventListener("mouseleave", function () {
    over.style.opacity = 0
  })

  x2.addEventListener("mouseenter", function () {
    over2.style.opacity = 1
  })

  x2.addEventListener("mouseleave", function () {
    over2.style.opacity = 0
  })

  x3.addEventListener("mouseenter", function () {
    over3.style.opacity = 1
  })

  x3.addEventListener("mouseleave", function () {
    over3.style.opacity = 0
  })


  x4.addEventListener("mouseenter", function () {
    over4.style.opacity = 1
  })

  x4.addEventListener("mouseleave", function () {
    over4.style.opacity = 0
  })

  x5.addEventListener("mouseenter", function () {
    over5.style.opacity = 1
  })

  x5.addEventListener("mouseleave", function () {
    over5.style.opacity = 0
  })



}


pg8();


var last = document.querySelector("#last-pg9")
var vid = document.querySelector("#page9 video")


last.addEventListener("mouseenter", function () {
  cur.style.width = "130px"
  cur.style.height = "130px"
  cur.style.backgroundColor = "#DEFF00"
  cur.innerHTML = "Let's go"
})
last.addEventListener("mouseleave", function () {

  cur.style.width = "28px"
  cur.style.height = "28px"
  cur.style.backgroundColor = "white"
  cur.innerHTML = ""
})

