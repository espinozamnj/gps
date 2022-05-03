(function(){
    let lhash = location.hash
    lhash = lhash.replace('#', '')
    function returnHOME() {
        open('#','_self')
        setTimeout(function(){
            loadHTML('home')
        }, 2e2)
    }
    if (typeof(data_cities[lhash]) == 'object') {
        let city = data_cities[lhash]
        $('.back').style.backgroundImage = 'url("./media/picture-city/' + city.picture + '.jpg")'
        $('.back .h1').innerText = city['name']
        let info = ''
        city['cities'].forEach(function(ct){
            let i_ct = /*html*/ `
                <div class="info-city">
                    <div class="name-city">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${ct[0]}</span>
                    </div>
                    <div class="location">${ct[1]}</div>
                </div>
            `
            info += i_ct
        })
        $('.locations').addEmt(info)
    } else {
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
    $('.return .btn-g').on(['click'], function () {
        returnHOME()                
    })

    // $('#require').inserJS(['map', 'slide'])
})()