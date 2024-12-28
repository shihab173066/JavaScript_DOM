function getFormvalue(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    var x = document.getElementById("form1");
    for (var i = 0; i < x.elements.length; i++) {
        if (x.elements[i].value !== 'Submit') {
            console.log(x.elements[i].value);
            document.write(x.elements[i].value);
        }
    }
}