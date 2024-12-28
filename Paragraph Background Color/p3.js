function changeBG(){
    const c = document.getElementsByTagName("p");
    for (let i = 0; i < c.length; i++) {
        c[i].style.background = "red";
        c[i].style.fontWeight = "bold"; 
    }
}