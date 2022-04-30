(function() {

let com = {
    e: {}
}
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
let elmnt = document.getElementById('inside')
let dom = /*html*/ `
<main class="main">
    ${
        com.e.carrousel([
            {
                img: '1648391907372-ed06b73cb3ec',
                title: 'Wallpapers Gigant',
                text: 'Consigue fondos de pantalla de alta calidad'
            },
            {
                img: '1561122081-f1ee173c024b',
                title: 'I like cooking!',
                text: 'Las mejores recetas para la cocina'
            },
            {
                img: '1563460716037-460a3ad24ba9',
                title: 'I love cats!',
                text: 'Los gatitos mas lindos que verás en toda tu vida'
            },
            {
                img: '1606246082577-2329910ef82c',
                title: 'Trucks are really big!',
                text: 'Camiones que verás hasta en casa'
            },
        ])
    }
    <section class="about">
        ${com.h1('Nosotros')}
        <div class="section">
            <div class="">
                <div class="history">
                    <div class="h3"></div>
                </div>
                <div class="details">
                    <div class="detail">
                        <div class="h3">Fuerza de ventas</div>
                        <div class="picture"
                            style="background-image:url('https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400')"
                        ></div>
                        <div class="text">El vídeo proporciona una manera eficaz para ayudarle a demostrar el punto. Cuando haga clic en Vídeo en línea, puede pegar el código para insertar del vídeo que desea agregar.</div>
                        <div class="btn-c">
                            <div class="btn-g">
                                Leer más
                            </div>
                        </div>
                    </div>
                    <div class="detail">
                        <div class="h3">Fuerza de ventas</div>
                        <div class="picture"
                            style="background-image:url('https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&w=400')"
                        ></div>
                        <div class="text">El vídeo proporciona una manera eficaz para ayudarle a demostrar el punto. Cuando haga clic en Vídeo en línea, puede pegar el código para insertar del vídeo que desea agregar.</div>
                        <div class="btn-c">
                            <div class="btn-g pnt">
                                Leer más
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
    </section>
    <section class="best">
        ${com.h1('Beneficios de trabajar con nosotros')}
        <div class="section">
            ${
                com.e.card([
                    {
                        icon: '<i class="fa-solid fa-truck-fast"></i>',
                        text: 'Ofrecemos entregas rápidas, hasta solo un día de demora'
                    },
                    {
                        icon: '<i class="fa-solid fa-mobile"></i>',
                        text: 'Gestiona tus procesos desde cualquier lugar con la app móvil'
                    },
                    {
                        icon: '<i class="fa-solid fa-cart-shopping"></i>',
                        text: 'Tu escoges tus cantidades, no hay monto mínimo'
                    },
                ])
            }
        </div>
    </section>
    <section class="brands">
        ${com.h1('Marcas con las que trabajamos')}
        <div class="section brands_g fullw">
            ${com.e.brands(['3m', 'alicorp', 'backus', 'cartavio', 'cbc', 'clorox', 'colgate', 'gloria', 'johnson', 'kimberly-clark', 'molitalia', 'nestle', 'p-g', 'pepsico', 'protisa', 'quaker', 'sao', 'sapolio', 'savital', 'tabernero', 'unilever'])}
        </div>
    </section>
    <section class="clients">
        <div class="fullw">
            ${com.h1('Zona clientes')}
            <div class="access">
                <div class="list">
                    <button class="cliente-btn pnt">
                        <i class="fa-solid fa-download"></i>
                        <span>Descarga tus documentos</span>
                    </button>
                    <button class="cliente-btn pnt">
                        <i class="fa-solid fa-mobile"></i>
                        <span>Obtén la aplicación</span>
                    </button>
                </div>
                <div class="embed"></div>
            </div>
        </div>
    </section>
</main>
<div class="footer">

</div>
<a class="pnt send-msg">
    <i class="fa-brands fa-whatsapp"></i>
</a>
  `
    elmnt.addEmt(dom)
    setTimeout(function() {
        // $('.loader').remove()
        $('.loader').classList.toggle('show')
    }, 3e2)
})()