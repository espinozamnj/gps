(function(){
    function handleMarquee() {
        const marquee = $$(".marquee")
        let speed = 0.6
        speed = 1.6
        let lastScrollPos = 0
        let timer
        marquee.forEach(function (el){
            const container = el.querySelector(".inner")
            const content = el.querySelector(".inner > *")
            //Get total width
            const elWidth = content.offsetWidth
            //Duplicate content
            let clone = content.cloneNode(true)
            container.appendChild(clone)
            let progress = 1
            let is_force_stop = false
            let is_hover = true
            function loop() {
                if (is_hover) {
                    progress = progress - speed
                    if (progress <= elWidth * -1) {
                        progress = 0
                    }
                    container.style.transform = "translateX(" + progress + "px)"
                    //container.style.transform += "skewX(" + speed * 0.4 + "deg)";
                }
                window.requestAnimationFrame(loop)
            }
            loop()
            el.addEventListener("scroll", function () {
                const maxScrollValue = 12
                const newScrollPos = window.scrollY
                let scrollValue = newScrollPos - lastScrollPos
                if (scrollValue > maxScrollValue) scrollValue = maxScrollValue
                else if (scrollValue < -maxScrollValue) scrollValue = -maxScrollValue
                speed = scrollValue
                clearTimeout(timer)
                timer = setTimeout(handleSpeedClear, 10)
            })
            el.on(['mouseenter', 'mouseover'], function(){
                !is_force_stop && (is_hover = false)
            })
            el.on(['mouseleave', 'mouseout'], function(){
                !is_force_stop && (is_hover = true)
            })
            el.on(['click'], function(){
                is_force_stop = !is_force_stop
            })
        })
        function handleSpeedClear() {
            speed = 3
        }
    }
    handleMarquee()
})()