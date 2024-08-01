const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


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

document.getElementsByClassName('section-3')[0].addEventListener('mousemove',(e)=>{
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
document.getElementsByClassName('section-3')[0].addEventListener('mousemove',()=>{
    gsap.to('.product-cursor',{
        scale:1
    })
})
document.getElementsByClassName('section-3')[0].addEventListener('mouseleave',()=>{
    gsap.to('.product-cursor',{
        scale:0
    })
})