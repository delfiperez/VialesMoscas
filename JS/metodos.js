function calcular() {
    var ml = document.getElementById("ml").value;
    var v = document.getElementById("v").value;
    
    if (ml!="" && v==""){ // caso Cantidad de ml
        document.getElementById("mili").innerHTML = parseFloat(ml);
        document.getElementById("agua").innerHTML = parseFloat(ml);
        document.getElementById("saca").innerHTML = parseFloat((ml*4)/100);
        document.getElementById("pole").innerHTML = parseFloat((ml*2)/100);
        document.getElementById("leva").innerHTML = parseFloat((ml*6.6)/100);
        document.getElementById("agar").innerHTML = parseFloat((ml*10)/100);
        document.getElementById("niag").innerHTML = parseFloat((ml*0.18)/100);
        document.getElementById("propi").innerHTML = parseFloat((ml*0.4)/100);
        document.getElementById("vial").innerHTML = parseFloat(ml/10);


        document.getElementById("ml").value = "";
        document.getElementById("v").value = "";

    } else if (ml=="" && v!="") { // caso Cant Viales

        document.getElementById("mili").innerHTML = parseFloat(v*10);
        document.getElementById("agua").innerHTML = parseFloat(v*10);
        document.getElementById("saca").innerHTML = parseFloat(v*0.4);
        document.getElementById("pole").innerHTML = parseFloat(v*0.2);
        document.getElementById("leva").innerHTML = parseFloat(v*0.66).toPrecision(3);
        document.getElementById("agar").innerHTML = parseFloat(v);
        document.getElementById("niag").innerHTML = parseFloat(v*0.018).toPrecision(3);
        document.getElementById("propi").innerHTML = parseFloat(v*0.04).toPrecision(3);
        document.getElementById("vial").innerHTML = parseFloat(v);

        document.getElementById("ml").value = "";
        document.getElementById("v").value = "";

    } else if (ml!="" && v!=""){ //

        window.alert("ERROR, igresar un numero en solo uno de los campos.");
        
        document.getElementById("ml").value = "";
        document.getElementById("v").value = "";

    } else {
        
        document.getElementById("mili").innerHTML = parseFloat(0);
        document.getElementById("agua").innerHTML = parseFloat(0);
        document.getElementById("saca").innerHTML = parseFloat(0);
        document.getElementById("pole").innerHTML = parseFloat(0);
        document.getElementById("leva").innerHTML = parseFloat(0);
        document.getElementById("agar").innerHTML = parseFloat(0);
        document.getElementById("niag").innerHTML = parseFloat(0);
        document.getElementById("propi").innerHTML = parseFloat(0);
        document.getElementById("vial").innerHTML = parseFloat(0);
        
        document.getElementById("ml").value = "";
        document.getElementById("v").value = "";
    }
}
function sumar() {
    var ml = document.getElementById("ml").value;

    var result = parseFloat(ml);

    var agua = ml;
    var sacarosa = (ml*4)/100;
    var polen = (ml*2)/100;
    var levad = (ml*6.6)/100;
    var agar = (ml*10)/100;
    var nipa = (ml*0.18)/100;
    var propio = (ml*0.4)/100;
    var vial = (ml*4)/100;



    document.getElementById("resultadoSuma").innerHTML = result;

    document.getElementById("a").value = "";
    
    console.log(result)
}

function restar() {
    console.log("Ingreso a la funcion restar")
    var v = document.getElementById("v").value;
    
    var resultado = parseFloat(v);
    
    console.log(v);
    document.getElementById("resultadoresta").innerHTML = resultado;

}