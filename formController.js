$(document).ready(function (event) {

    (function ($) {
        $.fn.toggleError = function (isValidInput, textOfError) {

            var parent = this.parent();
            parent.find('.error').remove();

            if (isValidInput) {
                parent.toggleClass("has-success", isValidInput).toggleClass("has-error", !isValidInput);
                return true;
            } else {
                parent.append("<h4 style='color: red' class='text-center error'>" + textOfError + "</h3>");
                return false;
            }


        };
    })(jQuery);


    $('#inputEmail').on('input', function () {
        $(this).toggleError(isValidEmail($(this).val()), "input correct email address");
    });

    $('#inputPassword').on('input', function () {
        $(this).toggleError($(this).val().trim().length != 0, 'enter correct password');
    });
    $('#inputConfirmPassword').on('input', function () {
        $(this).toggleError($(this).val().trim().length != 0, "Passwords are not matching");
    });

    $('#miracleForm').find("#socials").on('input', function () {
        $(this).toggleError(isValidUrl($(this).val()), "this must be a link")
    });

    function isValidEmail(email) {
        var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
        return filter.test(email);
    }

    function isValidUrl(url) {
        var filter = /^http(s)?:\/\/(www\.)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        return filter.test(url);
    }


    function validateForm(input) {
        var inputEmail = $("#inputEmail");
        var inputPassword = $("#inputPassword");
        var inputConfirmPassword = $("#inputConfirmPassword");
        var socials = $("#socials");
        var firstName = $("#inputFirstName");

        if (input.val() == inputEmail.val()) {
            return inputEmail.toggleError(isValidEmail(inputEmail.val()), "input correct email");
        } else if (input.val() == inputPassword.val()) {
            return inputPassword.toggleError(inputPassword.val().trim().length != 0, 'enter correct password');
        } else if (input.val() == inputConfirmPassword.val()) {
            return inputConfirmPassword.toggleError(inputConfirmPassword.val() == inputPassword.val(), "passwords are not matching");
        } else if (input.val() == socials.val()) {
            return socials.toggleError(isValidUrl(socials.val()), "this must be a link")
        } else if (input.val() == firstName.val()) {

        }

    }


    var currentForm;
    var nextForm;
    var prevForm;

    $(".next-button").on('click', function () {

        var miracleForm = $("#miracleForm");

        currentForm = $(this).parent();
        nextForm = $(this).parent().next();

        var inputs = $('form').find(':input:not(:hidden):not(:button):not(:submit)');

        for (var i = 0; i < inputs.length; i++) {
            var boolshiet = validateForm($(inputs[i]));
            console.log(boolshiet);
        }
        if (boolshiet == true) {
            $('#progressList').find('li').eq($('fieldset').index(nextForm)).addClass('active');

            nextForm.show(200);
            currentForm.hide(400);
        }




        $('.previous-button').on('click', function () {
            currentForm = $(this).parent();
            prevForm = $(this).parent().prev();

            $('#progressList').find('li').eq($('fieldset').index(currentForm)).removeClass('active');

            prevForm.show(200);
            currentForm.hide(400);


        });

    });


});


