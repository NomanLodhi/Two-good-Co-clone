const smoothScroll=()=>{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"

});
gsap.to('.logos svg',{
    transform:'translatey(-100%)',
    scrollTrigger:{
        trigger:".section-1",
        scroller:'.main',
        markers:true,
        start:'top 0',
        end:'top -5%',
        scrub:true
    }
})
gsap.to('.nav-menu',{
    transform:'translatey(-100%)',
    opacity:0,
    scrollTrigger:{
        trigger:".section-1",
        scroller:'.main',
        markers:true,
        start:'top 0',
        end:'top -5%',
        scrub:true
    }
})



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
smoothScroll();

const dropDownmenu=()=>{
document.getElementById('menu-close').addEventListener('click',()=>{
    gsap.to('.nav-dropdown-menu',{
transform:'translateY(-1000px)'
})
})
document.getElementById('menu-open').addEventListener('click',()=>{
    gsap.to('.nav-dropdown-menu',{
        transform:'translateY(0%)',
       
    })
})
}
dropDownmenu()


const VideosFunction=()=>{
    let videoPlayer=document.getElementsByClassName('video-player')[0];
let videoCursor=document.getElementsByClassName('video-cursor')[0];
let videoIntro=document.getElementsByClassName('intro-video')[0];
videoPlayer.addEventListener('mousemove',(e)=>{
    let posX=e.clientX-70;
    let posY=e.clientY-80;
   
    videoCursor.animate({
    left:`${posX}px`,
    top:`${posY}px`,
    opacity:1,
    transform:'scale(1)'
    },{duration:500,fill:"forwards"})

})
videoPlayer.addEventListener('mouseleave',()=>{
    videoCursor.animate({
        transform:'scale(0)'
        },{duration:500,fill:"forwards"})
})
videoPlayer.addEventListener('click',()=>{
    videoIntro.setAttribute('controls', '');
    videoIntro.removeAttribute('autoplay');
    videoIntro.removeAttribute('muted');
    videoCursor.style.display='none'
})
}
VideosFunction();

document.addEventListener('DOMContentLoaded', function() {
    gsap.from("#change", {
        opacity: 0,
        y: 30,
        duration: 0.5
    });
    gsap.from("#the", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay:0.3
    });
    gsap.from("#course", {
        opacity: 0,
        y: 30,
        duration: 0.5,
        delay:0.5
    });
    gsap.from(".video-player", {
        opacity: 0,
        scale:0.9,
        duration: 0.6,
        delay:1
    });
});

const productCursor=()=>{
    document.getElementsByClassName('section-4')[0].addEventListener('mousemove',(e)=>{
        gsap.to('.product-cursor',{
            left:e.x,
            top:e.y
        })
    })
    document.getElementById('product-1').addEventListener('mousemove',()=>{
        gsap.to('.product-cursor',{
            background:'rgb(245, 223, 207)',
            scale:1
        })
    })
    document.getElementById('product-1').addEventListener('mouseleave',()=>{
        gsap.to('.product-cursor',{
            scale:0.5
        })
    })
    document.getElementById('product-2').addEventListener('mousemove',()=>{
        gsap.to('.product-cursor',{
           scale:1,
           background:'rgb(255, 225, 207)'
        })
    })
    document.getElementById('product-2').addEventListener('mouseleave',()=>{
        gsap.to('.product-cursor',{
            scale:0.5
        })
    })
    document.getElementById('product-3').addEventListener('mousemove',()=>{
        gsap.to('.product-cursor',{
           scale:1,
           background:'rgb(245, 223, 300)'
        })
    })
    document.getElementById('product-3').addEventListener('mouseleave',()=>{
        gsap.to('.product-cursor',{
            scale:0.5
        })
    })
    document.getElementById('product-4').addEventListener('mousemove',()=>{
        gsap.to('.product-cursor',{
           scale:1,
           background:'rgb(245, 223, 207)'
        })
    })
    document.getElementById('product-4').addEventListener('mouseleave',()=>{
        gsap.to('.product-cursor',{
            scale:0.5
        })
    })
    document.getElementsByClassName('section-4')[0].addEventListener('mousemove',()=>{
        gsap.to('.product-cursor',{
            scale:1
        })
    })
    document.getElementsByClassName('section-4')[0].addEventListener('mouseleave',()=>{
        gsap.to('.product-cursor',{
            scale:0
        })
    })
}
productCursor()
document.getElementsByClassName('main')[0].addEventListener('scroll',()=>{
    console.log('Hello')
})

const menulinksAnimation=()=>{
gsap.to('#menu-links-1',{
transform:'translateY(-100%)',
duration:0.3
}
)
gsap.to('#menu-links-2',{
transform:'translateY(-100%)',
duration:0.5
}
)
gsap.to('#menu-links-3',{
transform:'translateY(-100%)',
duration:0.7
}
)
gsap.to('#menu-links-4',{
transform:'translateY(-100%)',
duration:0.9
}
)
gsap.to('#menu-links-5',{
transform:'translateY(-100%)',
duration:1
}
)
gsap.to('#menu-links-6',{
transform:'translateY(-100%)',
duration:1
}
)
gsap.to('#menu-links-7',{
transform:'translateY(-100%)',
duration:1
}
)
gsap.to('#menu-links-8',{
transform:'translateY(-100%)',
duration:1
}
)
gsap.to('#menu-links-9',{
transform:'translateY(-100%)',
duration:1
}
)

}
menulinksAnimation()