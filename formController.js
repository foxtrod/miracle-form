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


    //(function ($) {
    //    $.fn.validationPass = function () {
    //        var s = '#inputPassword';
    //        return ($(s).val() == $('#inputConfirmPassword').val() && $(s).val().length != 0);
    //    }
    //})(jQuery);
    //
    //(function ($) {
    //    $.fn.validationEmail = function (email) {
    //        //$('#inputEmail').toggleError(isEmail(email).val(), "input correct email address");
    //        return isEmail(email);
    //    }
    //})(jQuery);
    //
    //(function ($) {
    //    $.fn.validationSocials = function (social) {
    //        return ($(social).is("a"));
    //    }
    //})(jQuery);


    //$('#inputEmail').on('input', function () {
    //    $(this).toggleError(isEmail($('#inputEmail').val()), "input correct email address");
    //});
    //
    //$('#inputPassword').on('input', function () {
    //    $(this).toggleError($(this).val().trim().length != 0, 'enter correct password');
    //});
    //$('#inputConfirmPassword').on('input', function () {
    //    $(this).toggleError($(this).val().trim().length != 0, "Passwords are not matching");
    //});

    //$('#miracleForm').find("#socials :input").on('input', function () {
    //    $(this).toggleError($(this).is("a"), "this must be a link")
    //});

    //function isEmail(email) {
    //    var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    //    return filter.test(email);
    //}




    var currentForm;
    var nextForm;
    var prevForm;

    $(".next-button").on('click', function () {

        var miracleForm = $("#miracleForm");

        miracleForm.validate({
            rules: {
                inputEmail: {
                    required: true,
                    email: true
                },
                inputPassword: {
                    required: true
                },
                inputConfirmPassword: {
                    equalTo: "#inputPassword"
                },
                social: {
                    required: true,
                    url: true
                },
                fullName: {
                    required: true
                }
            },
            messages: {
                inputEmail: "Please enter correct email",
                inputPassword: "Enter correct password",
                inputConfirmPassword: "Passwords not matching",
                social: "Enter correct url",
                fullName: "Enter your name ples"
            }
        });

        if (miracleForm.valid() == true) {
            currentForm = $(this).parent();
            nextForm = $(this).parent().next();

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


