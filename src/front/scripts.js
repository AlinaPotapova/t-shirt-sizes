
function enableSubmit() {
    let inputs = document.getElementsByClassName('req');
    let btn = document.querySelector('input[type="submit"]');

    submitBt()

    for (var i = 0; i < inputs.length; i++) {
        let changedInput = inputs[i];
        if (changedInput.value == '') {
            document.forms['form']['id'].setAttribute('disabled', 'disabled')
            return;
        }
    }
}
function validateForm() {
    let y = document.forms['form']['mail'].value;
}

function validateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (document.forms['form']['mail'].value.match(validRegex)) {

        return true;

    } else {

        alert('Invalid email address!');

        document.forms['form']['id'].setAttribute('disabled', 'disabled')

        return false;

    }

}
function tickPrivacyPolicyCheckbox() {
    document.forms['form']['data-protection'].checked == true ? document.forms['form']['data-protection'].checked = true :
        document.forms['form']['data-protection'].checked = false;

    submitBt();
}

function submitBt() {
    let submitBtn = document.forms['form']['id'];

    if (document.forms['form']['data-protection'].checked) {
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', 'disabled')
    }
}
