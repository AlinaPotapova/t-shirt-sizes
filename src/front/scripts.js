$(document).ready(function () {

    $("#send_form_button").click(function () {
        var isValid = validateForm();
        if (isValid) {
            $.ajax({
                url: '/submit',
                dataType: 'json',
                type: 'POST',
                contentType: "application/json",
                data: JSON.stringify({
                    email: $('#mail').val(),
                    size: $('#t-shirt-size').val(),
                    address: $('#adress').val(),
                }),
                success: function (data, textStatus, jQxhr) {
                    $('#submit_result').removeClass("error-result success-result").addClass("success-result")
                        .text('We received your request. Wait for the T-shirt!');
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    $('#submit_result').removeClass("error-result success-result").addClass("error-result")
                        .text('An error occured, please try again later.');
                }
            });
        }
    });
});

function validateForm() {
    var isEmailValid = isValidEmail();
    var size = $('#t-shirt-size').val();
    var address = $('#adress').val();
    var result = true;

    if (isEmailValid) {
        $('#mail-error').text('');
    } else {
        $('#mail-error').text('E-mail address is not valid or empty');
        result = false;
    }

    if (address == '') {
        $('#address-error').text('Address cannot be empty');
        result = false;
    } else {
        $('#address-error').text('');
    }

    if (size == '') {
        $('#size-error').text('Please select T-shirt size');
        result = false;
    } else {
        $('#size-error').text('');
    }

    return result;
}

function updateButton() {
    if ($("#data-protection").prop('checked'))
        $('#send_form_button').removeAttr('disabled');
    else
        $("#send_form_button").attr("disabled", "disabled");
}

function isValidEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var matches = $('#mail').val().match(validRegex);

    return matches != null && matches.length > 0;
}

