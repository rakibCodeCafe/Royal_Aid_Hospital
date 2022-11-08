const beefBurger = document.querySelector(".beefBurger");
const navList = document.querySelector(" .navList");

beefBurger.addEventListener("click", () => {
    beefBurger.classList.toggle("active");
    navList.classList.toggle("active");
});

const $ =jQuery.noConflict();
$(document).ready(function(){
    $('.parent_menu').on('click', function(){
        $(this).addClass('checking_click');
        $('.parent_menu.clicked_menu:not(.checking_click)').removeClass('clicked_menu');
        $(this).toggleClass('clicked_menu');
        $(this).removeClass('checking_click');
    })
})