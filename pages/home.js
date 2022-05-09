(function(){
    $('#require').inserJS(['map', 'slide', 'carrousel'])
    $('#require').inserJS(['https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js'])
    setTimeout(function () {
        var slider = tns({
            "container": "#base",
            "items": 3,
            "slideBy": "page",
            "mouseDrag": true,
            "swipeAngle": false,
            "speed": 400
        });          
    }, 3e3)
})()