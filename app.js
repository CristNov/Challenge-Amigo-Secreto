// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const Resultado = document.getElementById("resultado");
const ulListaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    //const inputAmigo = document.getElementById("amigo");
    //const nombre = input.value.trim();
    
    if (amigo.value === "") {
        alert ("Inserta el nombre de tu amigo a participar");
        return;
    }
    listaAmigos.push (amigo.value);
    ulListaAmigos.innerHTML += `<li>${amigo.value}</li>`;
    amigo.value = "";
    Reiniciar.style.display = 'inline';
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert ("No hay amigos agregados a la lista para sortear. Ingresa un nombre")
        return;
    }
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    Resultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSecreto}</li>`;
}

function limpiarTodo (){

    if(listaAmigos.length>0){
        listaAmigos.length = 0;
        ulListaAmigos.innerHTML = "";
        Resultado.innerHTML = "";
        return;
    }else{
        alert ("No es posible reiniciar no hay nombres para sortear.")
        return; 
    }
    
}



