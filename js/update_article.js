//場景
var controller = new ScrollMagic.Controller();

//動畫
var mv01 = TweenMax.fromTo('.salmon-pic', 1, {
    x: -1000,
    opacity: 0 
}, {
    x: 0,
    opacity: 1
})

//觸發事件
new ScrollMagic.Scene({
    triggerElement: '#point1',
}).setTween(mv01).addTo(controller);


// 第二個動-------------------
//動畫
var mv02 = TweenMax.fromTo('.sweet-group', 1, {
    x: 1000,
    opacity: 0 
}, {
    x: 0,
    opacity: 1
})

//觸發事件
new ScrollMagic.Scene({
    triggerElement: '#point2',
}).setTween(mv02).addTo(controller);

// 第二個動--------end-----