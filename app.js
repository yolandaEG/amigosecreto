// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let lista;

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    
    if (amigo == "" || amigo.length < 3) {
        alert("Ingresa un nombre valido de minimo 3 letras");
        document.getElementById('amigo').value = "";
    } else {
        let contenido = "";

        amigos.push(amigo);

        for (let i = 0; i < amigos.length; i++) {
            contenido += amigos[i] + "<br>";
        }

        document.getElementById('listaAmigos').innerHTML = contenido;
        document.getElementById('amigo').value = "";
    }
}

function sortearAmigo(){
    if (amigos.length < 2) {
        alert("Ingresa mas de un nombre valido");
    } else {
        let sorteo = amigos[Math.floor(Math.random() * amigos.length)];

        document.getElementById('resultado').innerHTML = sorteo;
    }    
}