function getAttributes()
{
    // Getting the href attribute value of the link
    var u = document.getElementById("w3r").href;
    var v = document.getElementById("w3r").hreflang;   
    var w = document.getElementById("w3r").rel; 
    var x = document.getElementById("w3r").target; 
    var y = document.getElementById("w3r").type; 

    document.write(
        `
        The value of the href is ${u} </br>
        The value of the hreflang is ${v} </br>
        The value of the rel is ${w} </br>
        The value of the target is ${x} </br>
        The value of the type is ${y} </br>
        `)
}
