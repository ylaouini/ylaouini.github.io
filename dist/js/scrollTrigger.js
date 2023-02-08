// gsap.registerPlugin(ScrollTrigger);


// gsap.to(".gs_reveal", {
//     scrollTrigger: ".gs_reveal", // start the animation when ".box" enters the viewport (once)
//     y: -100,
//     duration : 1
//   });


//   ScrollTrigger.create({
//     trigger: "#portfolio",
//     start: "top top",
//     endTrigger: "#otherID",
//     end: "bottom 50%+=100px",
//     onToggle: self => console.log("toggled, isActive:", self.isActive),
//     onUpdate: self => {
//       console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
//     }
//   });

// function animateFrom(elem, direction) {
//     direction = direction || 1;
//     var x = 0,
//         y = direction * 100;
//     if(elem.classList.contains("gs_reveal_fromLeft")) {
//       x = -100;
//       y = 0;
//     } else if (elem.classList.contains("gs_reveal_fromRight")) {
//       x = 100;
//       y = 0;
//     }
//     elem.style.transform = "translate(" + x + "px, " + y + "px)";
//     elem.style.opacity = "0";
//     gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
//       duration: 1.25, 
//       x: 0,
//       y: 0, 
//       autoAlpha: 1, 
//       ease: "expo", 
//       overwrite: "auto"
//     });
//   }
  
//   function hide(elem) {
//     gsap.set(elem, {autoAlpha: 0});
//   }
  
//   document.addEventListener("DOMContentLoaded", function() {
//     gsap.registerPlugin(ScrollTrigger);
    
//     gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
//       hide(elem); // assure that the element is hidden when scrolled into view
      
//       ScrollTrigger.create({
//         trigger: elem,
//         markers: true,
//         onEnter: function() { animateFrom(elem) }, 
//         onEnterBack: function() { animateFrom(elem, -1) },
//         onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
//       });
//     });
//   });
  