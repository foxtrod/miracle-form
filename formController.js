$(document).ready(function (event) {

    (function ($) {
        $.fn.toggleError = function (isValidInput, textOfError) {


            var parent = this.parent();

            parent.find('.error').remove();

            parent.toggleClass("has-success", isValidInput).toggleClass("has-error", !isValidInput);

            if (!isValidInput) {
                parent.append("<h4 style='color: red' class='text-center error'>" + textOfError + "</h3>");
            }

            return this;
        };
    })(jQuery);

    function isEmail(email) {
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        return filter.test(email);
    }

    $('#inputPassword').on('input', function () {
        $(this).toggleError($(this).val().trim().length != 0, 'enter correct password');
    });

    $('#inputEmail').on('input', function () {
        $(this).toggleError(isEmail($('#inputEmail').val()), "input correct email address");
    });

    var currentForm;
    var nextForm;
    var prevForm;


    $(".next-button").on('click', function () {
        currentForm = $(this).parent();
        nextForm = $(this).parent().next();

        $('#progressList').find('li').eq($('fieldset').index(nextForm)).addClass('active');
        nextForm.show();


    });

    $("#miracleForm :input").submit(function () {
        console.log($('#miracleForm').serialize());
    });

});























