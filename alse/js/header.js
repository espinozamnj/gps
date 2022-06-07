window.addEventListener('scroll', function(){
    let de = db || document.documentElement
    if (de.scrollTop > 100) {
        de.classList.add('scrolled')
    } else {
        de.classList.remove('scrolled')
    }
})