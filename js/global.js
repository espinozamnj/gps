var $$ = (d) => {return document.querySelectorAll(d)}
var $ = (d) => {return $$(d)[0]}
var db = $('body')
var com = {
    e: {},
}

Object.prototype.addEmt = function(str) {
    let ts = this
    // let htmlELM = new DOMParser().parseFromString(str, "text/xml")
    // ts.appendChild(htmlELM.firstChild)
    // let checkHTML = ts.innerHTML
    let checkTAG = [
        {ini: '></img>',end: ''},
        {ini: '></input>',end: '/>'},
        {ini: '></hr>',end: '/>'},
        {ini: '></img>',end: '/>'},
    ]
    let checkHTML = str.replace(/(\\x3c|<)!--.+-->/gi, '')
    checkTAG.forEach(function(c){
        checkHTML.replaceAll(c.ini, c.end)
    })
    checkHTML = checkHTML
        .replace(/(\t|\n)/g, '')
        .replace(/>[ ]+</g, '><')
    ts.innerHTML = checkHTML
}
Object.prototype.on = function(nameEvent, fn) {
    let ts = this
    if (typeof(nameEvent) != 'object') {
        console.error(ts, 'name Event must be an object')
    } else {
        nameEvent.forEach(function(e){
            ts.addEventListener(e, function(){
                fn()
            }, false)
        })
    }
}
Object.prototype.remove = function() {
    let ts = this
    ts.parentNode.removeChild(ts)
}
Object.prototype.forEmt = function(fn) {
    let ts = this
    // console.log(ts)
    let z = ts.length, i = 0
    while (i < z) {
        fn(ts[i])
        i++
    }
}
Object.prototype.adjacent = function (same, others) {
    let ts = this
    ts.parentNode.children.forEmt(function (node) {
        if (node == ts) {
            same(ts)
        } else {
            others(node)
        }
    })
}
Object.prototype.myorder = function () {
    let ts = this, order = -1
    let chd = ts.parentNode.children
    let z = chd.length, i = 0
    while (i < chd.length) {
        if (chd[i] == ts) {
            order = i
            break
        }
        i++
    }
    return order
}
Object.prototype.inserJS = function (files) {
    let ts = this
    files.forEach(function(fileName){
        let s = document.createElement('script')
        if (fileName.startsWith('http')) {
            s.src = fileName + '.js'
        } else {
            s.src = './js/' + fileName + '.js'
        }
        ts.appendChild(s)
    })
}
var loadHTML = function(fileName) {
    $('.loader').classList.add('show')
    fetch('./pages/' + fileName + '.html').then(function (response) {
        response.text().then(function (plainText) {
            // $('#content').innerHTML = plainText
            $('#content').addEmt(eval('`' + plainText.trim() + '`'))
            setTimeout(function () {
                let require = $('#require')
                require.innerHTML = ''
                let js = document.createElement('script')
                js.src = './pages/' + fileName + '.js'
                js.on(['load'], function(){
                    $('.loader').classList.remove('show')
                })
                require.appendChild(js)
                let css = document.createElement('link')
                css.rel = 'stylesheet'
                css.href = './css/' + fileName + '.css'
                require.appendChild(css)
            })
        })
    })
}