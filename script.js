$(document).ready(function () {

    (function($) {
        $.fn.toggleError = function (isValidInput, textOfError) {
            this.find('.error').remove();

            this.toggleClass("has-success", isValidInput).toggleClass("has-error", !isValidInput);
            console.log(this, isValidInput);
            if (!isValidInput) {
                this.append("<h3 class='text-center error'>" + textOfError + "</h3>");
            }

            return this;
        };
    })(jQuery);

    $('#name').on('input', function () {
        $('#styleName').toggleError($(this).val().trim().length != 0, "enter correct name");
    });

    $('#age').on('input', function () {
        $('#styleAge').toggleError($.isNumeric($(this).val()), "enter numeric value (0-99)");
    });



    //var D = $.Deferred();
    //D.done(function() {
    //    console.log("done");
    //});
    //D.fail(function() {
    //    console.log("fail");
    //});
    //
    //D.then(function() {
    //    console.log("done");
    //}, function() {
    //   console.log("fail");
    //});
    //
    //D.reject();

    var D = $.Deferred();
    var money = 100;



    D.progress(function($){
        console.log(money + " - " + $ + " = " + (money-$));
        money -= $;
        if (money < 0) {
            D.reject();
        }
    });

    setTimeout(function(){ D.notify(40); }, 500);
    setTimeout(function(){ D.notify(50); }, 1000);
    setTimeout(function(){ D.notify(30); }, 1500);

    D.done(function(){ console.log("All Ok") });
    D.fail(function(){ console.log("Insufficient Funds") });


    var def = $.Deferred();

    def.always(function() {

    });

});

