function locomotiveAnimation() {
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
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
  function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from(".line h1", {
      y: 150,
      stagger: 0.25,
      duration: 0.6,
      delay: 0.5,
    });
    tl.from("#line1-part1", {
      opacity: 0,
      onStart: function () {
        var h5timer = document.querySelector("#line1-part1 h5");
        var grow = 0;
        setInterval(function () {
          if (grow < 100) {
            h5timer.innerHTML = grow++;
          } else {
            h5timer.innerHTML = grow;
          }
        }, 27);
      },
    });
    tl.to(".line h2", {
      animationName: "loaderAnime",
      opacity: 1,
    });
    tl.to("#loader", {
      opacity: 0,
      duration: 0.2,
      delay: 2.9,
    });
    tl.from("#page1", {
        delay: 0.1,
        y:-1600,
        duration: 0.5,
       
    });
    tl.to("#loader", {
      display: "none",
    });
    tl.from("#nav-part1 ,#nav-part2 h6", {
      y:-50,
      opacity: 0,
      delay: 0.4,
      duration :0.6,
      stagger:0.2,
      
    });
    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
      y: 140,
      stagger: 0.2,
    });
    tl.from(
      "#hero1, #page2",
      {
        opacity: 0,
      },
      "-=1.2"
    );
    
  }
  function cursorAnimation() {
    const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });

}
locomotiveAnimation();
loadingAnimation();
cursorAnimation();
// gsap.from(".underline", {
//   x: -500,
//   opacity: 0,
//   duration: 0.7,
//   scrollTrigger: {
//     trigger: "#text1",
//     scroller: "#main",
//     start: "top 60%",
//     end:"top 40%",
//   },
// });
function page2(){
  var tl2 = gsap.timeline({scrollTrigger:{
    trigger: "#page2",
    start:"0% 70%",
    scroller: "#main",
    end:"30% 50%",
    scrub:true,
    // markers:true,
  }})
  
  tl2.to(".rounded-div-wrapper",{
    height:0,
    marginTop: 0
  })
  let t = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers: true,
      start: "0% 50%",
      end:"20% 50%",
      
    },
  });
  
  t.from(".underline",{
    width: "40%",
    opacity: 0,
  })
  t.from("#images img",{
    x:100,
    opacity:0,
    stagger:0.5,
    duration:0.5,
    
  })
  
  
}
page2();
let tl7 = gsap.timeline({
  scrollTrigger:{
      trigger: "#page3",
      scroller:"#main",
      start:"50% 50%",
      end: "300% 50%",
      pin:true,
      // markers: true,
      scrub: 0.00000000001,
  },  
});
tl7.to("#btn",{
  bottom:"7%",
})
tl7.to(".my-work-txt-div",{
  height:"60vh",
}, 'height')
tl7.to(".my-work-txt",{
  height:"60vh",
}, 'height')
tl7.to("#my",{
  left:"0%",
}, 'height')
tl7.to("#work",{
  right:"0%",
}, 'height')
tl7.to(".scroll-img",{
  marginTop:"-300%",
})
