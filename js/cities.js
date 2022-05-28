(function(){
    let lhash = location.hash
    lhash = lhash.replace('#', '')
    let lhash_d = lhash.split('.')[0]
    let lhash_c = lhash.split('.')[1]
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
            $('.iframe-map').addEmt(/*html*/ `
                <iframe class="map-embed" src="${city.embed}"></iframe>
            `)
            let cities_list = ''
            city['available'].forEach(function(dist) {
                cities_list +=  /*html*/ `
                    <ol>${dist}</ol>
                `
            })
            $('.list-cities ul').addEmt(cities_list)
            // add insert brands
        } else {
            errorPAGE()
        }
    } else {
        errorPAGE()
    }
    $('.return .btn-g').on(['click'], function () {
        returnHOME()                
    })
})()