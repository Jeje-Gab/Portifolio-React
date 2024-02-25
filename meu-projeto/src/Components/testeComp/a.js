gsap.to('.fillers path', { 
    scrollTrigger: { 
        trigger: '.content', 
        scrub: 0.5,
        ease: 'power4.in',
        start: "top bottom+=20%",
        end: "bottom bottom-=50%"
},
    strokeDashoffset: 0 }); 