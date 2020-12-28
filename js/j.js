//場景
var controller = new ScrollMagic.Controller();

//動畫
var tl05 = new TimelineMax();

tl05.to('.hhh1' , 1 , {
    x: 100,
    scale: 2
}).to('.hhh2' , 1 , {
    y: 100,
    scale: 2
}).to('.hhh3' , 1 , {
    x: 200,
    scale: 2
})

var scene04 = new ScrollMagic.Scene({
    triggerElement: '#point4',
     triggerHook :.3,
    //  duration : '300%'
}).setPin('.section05').setTween(tl05).addIndicators().addTo(controller);
