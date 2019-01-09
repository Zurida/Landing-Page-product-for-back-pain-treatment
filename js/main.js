$(document).ready(function() {

    $(function () {

        $("[data-toggle=scroll]").on('click', function () {
            var elementClick = $(".orderBottom")
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated),body:not(:animated)").animate({
                scrollTop: destination
            }, 2000);
            return false;
        });

    })


});




