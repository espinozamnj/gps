(function(){
    setTimeout(function(){
        $('[data-section=clients]').click()
        $$('.acordeon-e').forEmt(function(ac_e){
            ac_e.querySelectorAll('.ac-card').forEmt(
                function(card){
                    card.firstChild.on(['click'], function(){
                        if (card.classList.contains('active')) {
                            card.style.height = (card.children[0].offsetHeight) + 'px'
                            card.classList.remove('active')
                        } else {
                            card.adjacent(
                                function(s) {
                                    s.style.height = (s.children[0].offsetHeight + s.children[1].offsetHeight) + 'px'
                                    s.classList.add('active')
                                },
                                function(s) {
                                    s.style.height = (s.children[0].offsetHeight) + 'px'
                                    s.classList.remove('active')
                                }
                            )
                        }
                    })
                }
            )
        })
    }, 3e2)
})()