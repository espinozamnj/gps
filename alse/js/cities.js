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
            $('.iframe-location').addEmt(/*html*/ `
                <iframe class="map-embed" src="${city.dist}"></iframe>
            `)
            let cities_list = ''
            city['available'].forEach(function(dist) {
                cities_list +=  /*html*/ `
                    <ol>${dist}</ol>
                `
            })
            $('.list-cities ul').addEmt(cities_list)
            $('.brands .inner div').addEmt(/*html*/ `
                ${com.e.providers([
                    ['3m','Soluciones innovadoras 3M para profesionales de diferentes áreas'],
                    ['alicorp','Bienes de consumo comestibles'],
                    ['backus','Producción de bebidas alcohólicas entre otras'],
                    ['cartavio','Venta en general de bebidas alcohólicas'],
                    ['cbc','Bebidas de consumo, no alcohólicas'],
                    ['clorox','Productos para salud y limpieza'],
                    ['colgate','Salud e higiene dental'],
                ])}
            `)
            $('.brands h1').innerText += ' en ' + this_info[0]
        } else {
            errorPAGE()
        }
    } else {
        errorPAGE()
    }
    /*
    $('.return .btn-g').on(['click'], function () {
        returnHOME()                
    })*/
})()