(function(){
    $('.box-alert .done').on(['click'], function(){
        $('.box-alert').classList.add('accepted')
    })
    setTimeout(function() {
        $('.box-alert').classList.add('accepted')
    }, 6e2)
})()