(function() {
    $$('.slide-cont').forEmt(function(a) {
        let count_seconds = 0
        let bars = a.querySelector('.progress-slides').children
        let bar_bottom = a.querySelector('.slide-load-bar')
        function moveSlide(number) {

            if (!a.querySelector('.slide-show')) {
                a.querySelector('.slides').lastChild.classList.add('slide-show')
            }
            bars[number].adjacent(
                function(s) {
                    s.classList.add('active')
                },
                function(s) {
                    s.classList.remove('active')
                }
            )
            let last = a.querySelector('.slide-show')
            last.adjacent(
                function(s) {
                    s.style.zIndex = '1'
                    s.classList.remove('slide-show')
                },
                function(s) {
                    s.style.zIndex = ''
                }
            )
            let diff = last.myorder(), diffSignal = []
            diff > number
                ? diffSignal = ['-', '']
                : diffSignal = ['', '-']
            let nw = a.querySelector('.slides').children[number]
            nw.classList.add('slide-show')
            nw.style.transform = `translateX(${diffSignal[0]}100%)`
            setTimeout(function() {
                count_seconds = 0
                bar_bottom.innerHTML = ''
                bar_bottom.addEmt(/*html*/ `<span></span>`)
                bar_bottom.firstChild.style.animationDuration = '6s'
                last.style.transform = `translateX(${diffSignal[1]}100%)`
                nw.style.zIndex = '2'
                nw.style.transform = `translateX(0)`
            }, 5e2)
        }
        bars.forEmt(function(h) {
            h.on(['click'], function() {
                if (!h.classList.contains('active')) {
                    moveSlide(h.myorder())
                }
            })
        })
        setTimeout(function () {
            moveSlide(0)
            if (true) {
                bar_bottom.classList.add('enabled')
                setInterval(function() {
                    if (count_seconds == 6) {
                        count_seconds = 0
                        let ant = a.querySelector('.slide-show').myorder()
                        let slides_length = a.querySelector('.slides').children.length
                        if (ant == slides_length - 1) {
                            moveSlide(0)
                        } else {
                            moveSlide(ant + 1)
                        }
                    } else {
                        count_seconds++
                    }
                }, 1e3)
            }
        }, 0)
    })
})()