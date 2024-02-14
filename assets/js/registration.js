var Name = document.getElementById('name');
var Phone = document.getElementById("Phone");
var Password = document.getElementById('password');
var Email = document.getElementById('email');
var RegexEmail = /^[^@]+@[^@]+\.[^@]+$/;
var RegexName = /^[a-zA-Z0-9.-]{3,}$/;
var RegexPhone = /^01\d{9}$/;
var btn = document.getElementById("btn_next");

btn.onclick = function () {
    Next()
}
function Next() {
    if (EmailRegex() && NameRegex() && PhoneRegex()) {
        window.location.href = 'Medical History.html';
    }
    else {
        NotMatch()
    }
}
function NameRegex() {
    return RegexName.test(Name.value)
}
function EmailRegex() {
    return RegexEmail.test(Email.value)
}
function PhoneRegex() {
    return RegexPhone.test(Phone.value)
}
function NotMatch() {
    if (!EmailRegex() || !NameRegex() || !PhoneRegex()) {
        alert("Input Not Match")
    }
}
function validate(element, regex) {
    var testRegex = regex;
    if (testRegex.test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
}
Name.addEventListener("input", function () {
    validate(Name, RegexName);
});

Email.addEventListener("input", function () {
    validate(Email, RegexEmail);
});
Phone.addEventListener("input", function () {
    validate(Phone, RegexPhone);
});
