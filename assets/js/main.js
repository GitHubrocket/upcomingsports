$(function () {
    $('section[data-type="background"]').each(function () {
        var $window = $(window);
        var $bgobj = $(this);
        $(window).scroll(function () {
            var ypos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + ypos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });

    });
});

$(document).ready(function(){
    $('tr').click(function() {
        $(this).next('.description').slideToggle('fast');                
        
        })

});

