window.addEventListener('load', function(){
    setTimeout(function(){
        $('.javascript').inserJS(['cursor', 'dom', 'menu', 'header', 'data_cities'])
        setTimeout(function () {
            if (location.hash.length > 1) {
                loadHTML('city')
            } else {
                loadHTML('home')
                // loadHTML('about')
            }
        }, 8e2)
    }, 1e2)
})