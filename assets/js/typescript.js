function typeWriter(elemento) {

    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    console.log(textoArray);
    textoArray.forEach((letra, i) => {
        setTimeout(() =>
            elemento.innerHTML += letra, 105 * i);
    });
}


const titulo = document.querySelector('h1');
typeWriter(titulo);