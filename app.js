$(function () {

    //SEARCH BUTTON
    let searchBtn = $(`.searchBtn`)
    let searchBar = $(`.search`)
    let cancelBtn = $(`.cancelBtn`)

    searchBtn.click( function() {
        searchBar.fadeIn(350);
        $(this).hide()
        cancelBtn.css({
            "opacity": 1,
            "visibility": "visible"
        });
    } )

    cancelBtn.click(function(){

        searchBar.fadeOut();
        $(this).css({
            "opacity": 0,
            "visibility": "hidden"
        });
        searchBtn.fadeIn();
    })


    //NAVBAR FIXED
    let navbar = $(".navbar")
    let navbarTop = Math.ceil(navbar.offset().top)

    $(window).scroll(function(){
        let scrTop = $(window).scrollTop()

        if(scrTop > navbarTop){
            navbar.addClass("menuFixed")
        }else{
            navbar.removeClass("menuFixed")
        }
    })

})