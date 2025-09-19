// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Paso 0: Nuestro almacén de datos (la "memoria").
// Usamos 'let' porque el contenido de este array va a cambiar (vamos a añadirle amigos).
let amigos = [];
// Validación de que no se ingresen números en el nombre
const inputAmigo = document.getElementById('amigo');
const listaHTML = document.getElementById('listaAmigos');
const resultadoHTML = document.getElementById('resultado');

// --- Validación para que solo se puedan escribir letras ---
inputAmigo.addEventListener('input', function() {
    this.value = this.value.replace(/\d/g, ''); 
});
// Paso 1: Crear la función 'agregarAmigo'.
function agregarAmigo() {
    // Leemos el valor DEL INPUT JUSTO EN EL MOMENTO DEL CLIC. ¡Esta es la corrección!
    const nombreAmigo = inputAmigo.value;

    // Validación para no agregar nombres vacíos o duplicados.
    if (nombreAmigo.trim() === '') {
        alert('Por favor, escribe el nombre de un amigo.');
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado. Intenta con otro.');
        inputAmigo.value = ''; // Limpiamos para evitar reintentos accidentales.
        return;
    }
    
    // Añadimos el amigo al array 'amigos'.
    amigos.push(nombreAmigo);

    // Mostramos la lista actualizada en la pantalla.
    listaHTML.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');

    // Limpiamos y enfocamos el input para el siguiente nombre.
    inputAmigo.value = '';
    inputAmigo.focus();
    console.log(amigos);
}


// Paso 2: Crear la función 'sortearAmigo'.
function sortearAmigo() {
    // 2.1: Validar que haya al menos 5 amigos en la lista. Si no, mostrar una alerta.
    if (amigos.length < 5) {
        alert('Debes agregar al menos 5 amigos para poder sortear.');
        return;
    }
    //calculamos un indice aleatorio entre 0 y la cantidad de amigos -1
    const indiceAmigo = Math.floor(Math.random() * amigos.length);

    //obtenemos el nombre del amigo ganador usando ese indice
    const amigoGanador = amigos[indiceAmigo];
    //mostramos el nombre del amigo ganador en la pantalla
    const resultadoHTML = document.getElementById('resultado');
    resultadoHTML.textContent = `El amigo secreto es: ${amigoGanador}`;
    console.log(`El amigo secreto es: ${amigoGanador}`);
}
// botón de reiniciar 
function reiniciarJuego() {
    amigos = [];
    listaHTML.innerHTML = '';
    resultadoHTML.innerHTML = '';
}