$(function() {
    $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
    trigger: 'focus'
})


/* button to top */
var coverhieght = $("#coverscroll").height();
$(window).scroll(function() {
    if ($(window).scrollTop() > coverhieght)
        $("#backtotop").addClass('visible');
    else
        $("#backtotop").removeClass('visible');

})




/*side bar social icons */
var x = 100;

var sidebarsocial = $("#sidesocialbar");
var coverhieght2 = $("#coverscroll").height() - 150;
var dflex = "d-flex";
var dnone = "d-none";


$(window).scroll(function() {
    if ($(window).scrollTop() > coverhieght2) {
        sidebarsocial.removeClass(dnone);
        sidebarsocial.addClass(dflex);
    } else {
        sidebarsocial.removeClass(dflex);
        sidebarsocial.addClass(dnone);
    }

})




/**/


var hieghtfooter = $("#footerbody").height();

var p = hieghtfooter * 3;


var heiaghbody = $("#top").height();

var somme = heiaghbody - p;



$(window).scroll(function() {
    if ($(window).scrollTop() > somme) {
        sidebarsocial.removeClass(dflex);
        sidebarsocial.addClass(dnone);
    }

})


/**/



/*Fixed nav bar in top*/

var navbar = $("#mainnavbar");

var fixedtop = 'fixed-top';
var headerhieght = $("#secondnavbar").height();

$(window).scroll(function() {
    if ($(window).scrollTop() > headerhieght)
        navbar.addClass(fixedtop);
    else
        navbar.removeClass(fixedtop);

})



/* */

new WOW().init();