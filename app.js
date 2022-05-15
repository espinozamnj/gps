// $('.javascript').inserJS(['https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js'])
window.addEventListener('load', function(){
    setTimeout(function(){
        $('.javascript').inserJS([
            'cursor',
            'dom',
            'menu',
            'header',
            'data_cities',
            'cookies',
            'scroll'
        ])
        setTimeout(function () {
            if (location.hash.length > 1) {
                loadHTML('city')
            } else {
                loadHTML('home')
                // loadHTML('about')
            }
        }, 5e2)
    }, 1e2)
})