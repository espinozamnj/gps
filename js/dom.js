(function() {
    com.logoSRC = './media/logo_despensa-peruana.svg',
    com.logoHOME = /*html*/ `
        <a class="logoMain" href="/">
            <img alt="despensa peruana logo" src="${com.logoSRC}"/>
        </a>
    `
    com.h1 = function(title) {
        let inner = /*html*/ `<h1 class="fullw">${title}</h1>`
        return inner
    }
    // https://source.unsplash.com/900x400?pet
    com.e.carrousel = function(childs) {
        let slides = ''
        let progress = ''
        childs.forEach(function(slide){
            let i_slide = /*html*/ `<div class="slide">
                <picture>
                    <img src="https://images.unsplash.com/photo-${slide.img}?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MDY2MzU5NA&ixlib=rb-1.2.1&q=80&w=900" title="${slide.title.toLowerCase()}" alt="${slide.title.toLowerCase()}"/>
                </picture>
                <div class="target">
                    <div class="title">${slide.title}</div>
                    <div class="text">${slide.text}</div>
                </div>
            </div>`
            let i_progress = /*html*/ `
                <div class="slide-bar pnt"></div>
            `
            slides += i_slide
            progress += i_progress
        })
        let c_slide = /*html*/ `
            <div class="slide-cont">
                <div class="slides">
                    ${slides}
                </div>
                <div class="progress-slides">
                    ${progress}
                </div>
            </div>
        `
        return c_slide
    }
    com.e.card = function(childs) {
        let cardsHTML = ''
        childs.forEach(function(card){
            let i_card = /*html*/ `<div class="card">
                ${card['icon']}
                <p>${card['text']}</p>
            </div>`
            cardsHTML += i_card
        })
        return cardsHTML
    }
    com.e.brands = function(childs) {
        let brandsHTML = ''
        childs.forEach(function(name){
            let fileSrc = './media/brands/' + name.replace(/\s/g,'-') + '.png'
            let i_brand = /*html*/ `<div class="brand">
                <img src="${fileSrc}" alt="${name}"/>
            </div>`
            brandsHTML += i_brand
        })
        return brandsHTML
    }
    // let elmnt = document.getElementById('inside')
    // let dom = /*html*/ ``

    // elmnt.addEmt(dom)
})()