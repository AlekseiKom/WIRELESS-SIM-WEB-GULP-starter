function validateForm () {
    var element = document.forms["myForm"]["fname"].value;
    if (element == "") {
        alert ("Поле E-mail не должно быть пустым");
        return false;
    }
}