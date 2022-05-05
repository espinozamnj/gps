(function(){
    function handleMarquee() {
        const marquee = $$(".marquee")
        let speed = 0.6
        let lastScrollPos = 0
        let timer
        marquee.forEach(function (el) {
            console.log(el)
            const container = el.querySelector(".inner")
            const content = el.querySelector(".inner > *")
            //Get total width
            const elWidth = content.offsetWidth
            //Duplicate content
            let clone = content.cloneNode(true)
            container.appendChild(clone)
            let progress = 1
    
            function loop() {
                progress = progress - speed;
                if (progress <= elWidth * -1) {
                    progress = 0
                }
                container.style.transform = "translateX(" + progress + "px)"
                //container.style.transform += "skewX(" + speed * 0.4 + "deg)";
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
        })
        function handleSpeedClear() {
            speed = 3
        }
    }
    handleMarquee()
})()