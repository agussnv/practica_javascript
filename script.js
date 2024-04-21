function incrementar(boton){
    alert("se presionó: " + boton);
}

function cambiarFondo(){
    let cuerpo = document.body.style;
    if(cuerpo.backgroundColor == "white"){
        cuerpo.backgroundColor = "#151F30";
        //document.getElementById("nav").style.borderBottom = "hidden";
        document.getElementById("nav").style.backgroundColor = "white";
        document.getElementById("parrafo1").style.color = "white";
        document.getElementById("parrafo2").style.color = "white";
        document.getElementById("parrafo3").style.color = "white";
        /*for(let pep of document.getElementById("parrafo")){
            p.style.color = "white";
        }*/
        document.getElementById("cambiarColor").setAttribute("src","favicon/sol.png");
        let elements = document.querySelectorAll('ul > li > a');
        for (let elem of elements) {
            elem.style.color = "black";
        }
        document.getElementById("test").style.color = "black"
        document.getElementById("nom").style.color = "black";
    }else{
        cuerpo.backgroundColor = "white";
        //document.getElementById("nav").style.borderBottom = "1px solid black";
        document.getElementById("nav").style.backgroundColor = "black";
        document.getElementById("parrafo1").style.color = "black";
        document.getElementById("parrafo2").style.color = "black";
        document.getElementById("parrafo3").style.color = "black";
        /*for(let pep of document.getElementById("parrafo")){
            p.style.color = "black";
        }*/
        document.getElementById("cambiarColor").setAttribute("src","favicon/luna.png");
        let elements = document.querySelectorAll('ul > li > a');
        for (let elem of elements) {
            elem.style.color = "white";
        }
        document.getElementById("nom").style.color = "white";
    }
}

function autenticar(){
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    if(pass.length < 10){
        alert("El password es menor a 10 caracteres ("+ pass.length +")")
    }else{
        if(mail == "agus@gmail.com" && pass == "Agustin123"){
            alert("Datos correctos");
        }else{
            alert("Datos incorrectos");
        }
    }
}

function cambiarPersona(){
    let opcion = document.getElementById("select1");
    document.getElementById("text1").value = opcion.selectedIndex;
    document.getElementById("text2").value = opcion.options[opcion.selectedIndex].text;
    document.getElementById("text3").value = opcion.options[opcion.selectedIndex].value;
}

function cambiarPizza(){
    //let imagenes = ["img/margarita.jpg","img/primavera.jpg","img/bucaneve.jpg"]
    let opcion = document.getElementById("pizza");
    let unidades = parseInt(document.getElementById("unidades").text);
    //document.getElementById("imagenPizza").setAttribute("src", imagenes.indexOf(opcion.selectedIndex));
    document.getElementById("imagenPizza").setAttribute("src", "img/"+opcion.options[opcion.selectedIndex].text+".jpg");
    document.getElementById("precio").innerText = opcion.options[opcion.selectedIndex].value;
    document.getElementById("total").innerHTML = parseInt(document.getElementById("unidades").value) * parseInt(opcion.options[opcion.selectedIndex].value) + " €";
    console.log(document.getElementById("unidades").value);
}

function aumentar(){
    document.getElementById("unidades").value++;
}

function disminuir(){
    if(document.getElementById("unidades").value > 1)
        document.getElementById("unidades").value--;
    else
        alert("Error: cantidad mínima permitida");
}