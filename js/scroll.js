(function(){
    window.addEventListener('scroll', function(evt){
        let attr = 'viewport'
        let views = $$('[' + attr + ']')
        // db.scrollTop
        views.forEmt(function(emt){
            if (emt.getAttribute(attr) == '') {
                emt.setAttribute(attr, 'false')
                console.log(emt)
            }
            if (emt.isvisible() && emt.getAttribute(attr) == 'false') {
                emt.setAttribute(attr, 'true')
            }
        })
    })
})()