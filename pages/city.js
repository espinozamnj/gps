(function(){
    let lhash = location.hash
    lhash = lhash.replace('#', '')
    let lhash_d = lhash.split('.')[0]
    let lhash_c = lhash.split('.')[1]
    function returnHOME() {
        open('#','_self')
        setTimeout(function(){
            loadHTML('home')
        }, 2e2)
    }
    function errorPAGE() {
        $('.main').addEmt(/*html*/ `
            <section class="return">
                <div>
                    <div class="alert">Sitio no encontrado</div>
                    <div class="pnt btn-g">
                        <span>Regresando en</span>
                        <strong>3</strong>
                        <span>s.</span>
                    </div>
                </div>
                <div class="fullw bar">
                    <div class="bar-return"></div>
                </div>
            </section>
        `)
        let count_down_number = 2
        let count_down = setInterval(function(){
            if (count_down_number < 0) {
                clearInterval(count_down)
            } else {
                $('.return .btn-g strong').innerText = count_down_number
                count_down_number--
            }
        }, 1e3)
        setTimeout(function() {
            returnHOME()
        }, 3500)
    }
    if (typeof(data_cities[lhash_d]) == 'object') {
        let city = data_cities[lhash_d]
        let this_info = []
        city.cities.forEach(function(city_info){
            if (encodeURIComponent(city_info[0].toLowerCase().trim()) == lhash_c) {
                this_info.push(city_info)
            }
        })
        if (this_info.length > 0) {
            this_info = this_info[0]
            $('.back').style.backgroundImage = 'url("./media/picture-city/' + city.picture + '.jpg")'
            $('.back .h1').innerText = city['name'] + ' - ' + this_info[0]
            let info = /*html*/ `
                <div class="info-city">
                    <div class="name-city">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${this_info[1]}</span>
                    </div>
                </div>
            `
            $('.locations').addEmt(info)
        } else {
            errorPAGE()
        }
    } else {
        errorPAGE()
    }
    $('.return .btn-g').on(['click'], function () {
        returnHOME()                
    })

    // $('#require').inserJS(['map', 'slide'])
})()