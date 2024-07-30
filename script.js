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

