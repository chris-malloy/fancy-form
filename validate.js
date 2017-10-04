// wait until the DOM is ready
$(document).ready(() => {
    // console.log('ready!');
    // submit listener only works for form
    // input tags inside of the form will submit their data if they have submit attr
    $('.sign-up-form').submit(function(event) {
        // Browser is, by default, going to submit this form.  
        // It will send it to the "action" attribute
        // There is no action, so it just reloads
        // prevetnDefault against any evrent object, will prevent it form doing what it normally does
        // this specific instead is good for one page sites
        event.preventDefault();
        // console.log('User submitted the form!');

        // Target all the input fields...
        // loop through all, and check the length...
        $('.form-wrapper input').each(function() {
            // get the class of the thing we are on.
            // i.e. password, address, phone, etc.
            // and IF it's empty, go grab the thing with the class
            // that matches it + '-error'
            var userInput = $(this).val();
            console.log($(this));
            var thisClass = $(this).attr('class');
            // console.log(`${thisClass} has a value of ${userInput}`)
            // console.log(userInput);
            var errorClass = `.${thisClass}-error`;
            if (userInput === "") {
                $(errorClass).html("Please enter a valid answer.")
                $(errorClass).show();
            } else {
                $(errorClass).hide();
            }
        });
        var password = $('.password').val();
        var password2 = $('.password2').val();
        if (password !== password2) {
            $('.password-error').html('Your passwords do not match.');
        }

        // val() gets the value
        // console.log($('.fullName').val());
        // the fullName needs to be at least 2 characters
        // so write a check
        var userName = $('.fullName').val();
        if (userName.length < 2) {
            // console.log("Please enter a valid name.");
            $('.full-name-error').show();
        } else {
            $('.full-name-error').hide();
        }
    });
});