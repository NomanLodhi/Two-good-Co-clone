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

const tabDrag=()=>{
    let clickDrag= false;
    var tabhead=document.getElementsByClassName('tab-header')[0];
    tabhead.addEventListener('mousedown',()=>{
        clickDrag=true;
    })

    tabhead.addEventListener('mousemove',(e)=>{
        if(!clickDrag) return;
        tabhead.scrollLeft -=e.movementX;
    })
    document.addEventListener('mouseup',()=>{
        clickDrag=false
    })
}
tabDrag()

const tabInteraction=()=>{
    const buttons = document.querySelectorAll('.radio');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    
})
let radio1=document.getElementById('radio-1');
let radio2=document.getElementById('radio-2');
let radio3=document.getElementById('radio-3');
let radio4=document.getElementById('radio-4');
let radio5=document.getElementById('radio-5');
let radio6=document.getElementById('radio-6');
let radio7=document.getElementById('radio-7');
let radio8=document.getElementById('radio-8');
let radio9=document.getElementById('radio-9');
let radio10=document.getElementById('radio-10');
let radio11=document.getElementById('radio-11');
let radio12=document.getElementById('radio-12');
let radio13=document.getElementById('radio-13');
let tabText=document.getElementById('tab-text');

radio1.addEventListener('click',()=>{

    tabText.innerHTML=`Thank you so much for
the beautiful catering; it
means a lot working
with a company such as
Two Good Co.`
gsap.to('#tab-text',{
    transform:'translateY(0)',
     opacity:1  
})
})
radio2.addEventListener('click',()=>{

    tabText.innerHTML=`The hampers we ordered
were lovely and the
team are wonderful to
liaise with.`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio3.addEventListener('click',()=>{

    tabText.innerHTML=`
My package just arrived
and the presentation is
so beautiful; elegant,
magical and
meaningful, with the
items wrapped in
delicious-smelling tissue
paper. Gorgeous; will be
back for more.`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio4.addEventListener('click',()=>{

    tabText.innerHTML=`
I think I speak for
everyone when I say we
are very grateful to
have been able to come
in and help out for the
day; the work you do is
amazing.
Name
`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio5.addEventListener('click',()=>{

    tabText.innerHTML=`
Everyone at Two Good
are lovely to work with.
Catering was excellent
and well priced, all for
a good cause... what's
not to love?
Name

`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio6.addEventListener('click',()=>{

    tabText.innerHTML=`
Everyone at Two Good
My CEO asked me who I
had used for the
catering; when I
explained about Two
Good, she said "Oh,
that’s why - the food is
made with love."
Name
`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio7.addEventListener('click',()=>{

    tabText.innerHTML=`
This is the best catering
food I have had in years.
All the meals were
absolutely delicious,
well presented and
generous.
Name

`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio8.addEventListener('click',()=>{

    tabText.innerHTML=`
Great cause, great
people and absolutely
great for the
environment.
Name


`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio9.addEventListener('click',()=>{

    tabText.innerHTML=`
Thank you so very much
for the beautiful gift
packs; my heart melted. I
nearly cried when I
opened one; I can only
imagine how the women
in the shelters feel when
they receive such a gift.
Name



`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio10.addEventListener('click',()=>{

    tabText.innerHTML=`
I wanted to say a
MASSIVE thank you for
the absolutely brilliant
catering at our team
offsite yesterday. The
food was absolutely
magnificent – high
quality, fresh and
delicious. I had so many
positive comments from
my team...I will definitely
be a repeat customer.
Name



`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio11.addEventListener('click',()=>{

    tabText.innerHTML=`
Love the quality of the
food and level of
customer service equals
the 'meaningfulness' of
every purchase.
Name



`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio12.addEventListener('click',()=>{

    tabText.innerHTML=`
I can’t thank you
enough for the amazing
food your team
provided us today. Our
staff couldn’t speak
highly enough of the
fish and the salads;
looking forward to
working together more.
Name


`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})
radio13.addEventListener('click',()=>{

    tabText.innerHTML=`
Blown away by the
quality of the food and
presentation.
Name



`
gsap.to('#tab-text',{
    transform:'translateY(0)',opacity:1
})

})

}
tabInteraction()

const emailbtn=()=>{
    let warning=document.getElementById('warning')
    let inputfield=document.getElementById('emailInput').value;
    let btn=document.getElementById('emailSubmit')
    btn.addEventListener('click',()=>{
        if(inputfield===''){
            warning.style.display='block';
        }
        else{
            warning.style.display='none';
        }
        if(btn.innerHTML='<i class="ri-arrow-right-line"></i>'){
btn.innerHTML='<i class="ri-corner-down-left-fill"></i>'
}
else{
            btn.innerHTML='<i class="ri-corner-down-left-fill"></i>'

        }
            
    })
}
emailbtn()