(function() {
    $('.menu-movil').on(['click'], function() {
        $('.app').classList.toggle('open-menu')
    })
})();
function check_menu_nav() {
    $$('nav [data-section]').forEmt(function(btnM) {
        btnM.on(['click'], function(){
            let hh = $('.header').offsetHeight / 5 * 5.5
            let toSection = btnM.getAttribute('data-section')
            toSection = 'section.' + toSection
            let posY = $(toSection).offsetTop
            posY = posY - hh
            document.body.scrollTop = posY
        })
    })
    $('#to-home').on(['click'], function(){
        returnHOME()
    })
}
check_menu_nav()