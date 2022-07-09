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
                    console.log('success');
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        }
    });
});

function validateForm() {
    var mail = $('#mail').val();
    var size = $('#t-shirt-size').val();
    var address = $('#adress').val();
    if (mail == '' || size == '' || address == '') {
        alert("All required filled should be filled out");
        return false;
    }
    else if (result() == false) {
        return false;
    }
    else {
        return true;
    }
}

function updateButton() {
    if ($("#data-protection").prop('checked'))
        $('#send_form_button').removeAttr('disabled');
    else
        $("#send_form_button").attr("disabled", "disabled");
}

var result = function validateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if ($('#mail').val().match(validRegex)) {
        return true;

    } else {
        alert('Invalid email address!');
        return false;
    }
}

