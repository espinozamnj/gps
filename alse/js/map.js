(function () {
    fetch('./media/peru-map.svg').then(function (response) {
        response.text().then(function (plainText) {
            $('.map-container').innerHTML = plainText

            let cities_order = {}, cities_names = []
            let list_hmtl = ''
            for (const cit in data_cities) {
                if (Object.hasOwnProperty.call(data_cities, cit)) {
                    let city = data_cities[cit]
                    cities_names.push(city.picture)
                }
            }
            cities_names = cities_names.sort()
            cities_names.forEach(function (city) {
                cities_order[city] = data_cities[city]
            })
            for (const cit in cities_order) {
                if (Object.hasOwnProperty.call(cities_order, cit)) {
                    let city = cities_order[cit]
                    let states = ''
                    city.cities.forEach(function (state) {
                        states += /*html*/ `
                        <ol data-an="top" viewport data-dpto="${city.picture}">
                            <span class="pnt">${state[0]}</span>
                        </ol>
                    `
                    })
                    $$("[title=" + city.picture + "]")[0].classList.add('enable')
                    let i_list = /*html*/ `
                        <li class="" data-state="${city.picture}">${city.name}</li>
                        ${states}
                    `
                    list_hmtl += i_list
                }
            }
            $('#peru-cities').addEmt(list_hmtl)


            var wordStates = document.querySelectorAll("#peru-cities li")
            var svgStates = document.querySelectorAll("#map_peru path")
            // console.log(wordStates)
            // console.log(svgStates)
        
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
                var svgState = $$("[title=" + stateCode + "]")
                if (svgState.length > 0) {
                    el.classList.add("on")
                    svgState[0].classList.add("on")
                }
            }
            function addOnFromState(el) {
                var stateId = el.getAttribute("title")
                var wordState = $$("[data-state='" + stateId + "']")
                if (wordState.length > 0) {
                    el.classList.add("on")
                    wordState[0].classList.add("on")
                }
            }
            $$('.map ul ol').forEach(function (el) {
                el.on(['click'], function(){
                    let dpto = el.getAttribute("data-dpto").toLowerCase().trim()
                    let state = el.innerText.toLowerCase().trim()
                    open('#' + dpto + '.' + encodeURIComponent(state), '_self')
                    setTimeout(function(){
                        loadHTML('city')
                    }, 5e2)
                })
            })
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
        })
    })
})()