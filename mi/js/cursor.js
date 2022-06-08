setTimeout(function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.cursor').style.display = 'none'
    } else {
        let e = $('.cursor-inner'),
            t = $('.cursor-outer')
        let nin, i = 0
        window.onmousemove = function (s) {
            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
            e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
            nin = s.clientY;
            i = s.clientX;
            let islink = false
            let hov = document.elementFromPoint(s.pageX, s.pageY)
            hov = s.target
            islink = !!(hov.closest('a')) || !!(hov.closest('.pnt'))
    
            if (islink) {
                e.classList.add('cursor-hover')
                t.classList.add('cursor-hover')
            } else {
                e.classList.remove('cursor-hover')
                t.classList.remove('cursor-hover')
            }
        }
    }
}, 1e3)