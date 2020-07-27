//MIX IT UP
var mixer = mixitup('.grid-portfolio-container');
//SCROLLIFY
$.scrollify({
    section : ".scrollify",
    setHeights: false,
    updateHash: false,
});
    
//HAMBARHER MENU
function openMenu() {
    document.getElementById('navbar').style.height = "100vh";
}
function closeMenu() {
    document.getElementById('navbar').style.height = "0";
}
//smooth scroll

$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        
        return false;
    });
});