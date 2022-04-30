(function () {
    var wordStates = document.querySelectorAll("#peru-cities li")
    var svgStates = document.querySelectorAll("#map_peru path")
    console.log(wordStates)
    console.log(svgStates)

    function removeAllOn() {
        wordStates.forEach(function (el) {
            el.classList.remove("on")
        })
        svgStates.forEach(function (el) {
            el.classList.remove("on")
        })
    }
    function addOnFromList(el) {
        var stateCode = el.getAttribute("data-state")
        var svgState = document.querySelector("[title=" + stateCode + "]")
        el.classList.add("on")
        svgState.classList.add("on")
    }
    function addOnFromState(el) {
        var stateId = el.getAttribute("title")
        var wordState = document.querySelector("[data-state='" + stateId + "']")
        el.classList.add("on")
        wordState.classList.add("on")
    }
    wordStates.forEach(function (el) {
        el.addEventListener("mouseenter", function () {
            addOnFromList(el)
        })
        el.addEventListener("mouseleave", function () {
            removeAllOn()
        })

        el.addEventListener("touchstart", function () {
            removeAllOn()
            addOnFromList(el)
        })
    })
    svgStates.forEach(function (el) {
        el.addEventListener("mouseenter", function () {
            addOnFromState(el)
        })
        el.addEventListener("mouseleave", function () {
            removeAllOn()
        })

        el.addEventListener("touchstart", function () {
            removeAllOn()
            addOnFromState(el)
        })
    })
})()