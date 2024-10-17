document.addEventListener('DOMContentLoaded', function(){
    const nombreInput = document.querySelector('#nombre');
    const apellidoInput = document.querySelector('#apellido');
    const documentoInput = document.querySelector('#dni');
    const botonIngresar = document.querySelector('#Ingresar');
    const bienvenida = document.querySelector('#titulo');
    botonIngresar.addEventListener('click', function (){
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const dni = documentoInput.value;
        if (nombre && apellido && dni) {
            resultado.value = `Nombre: ${nombre} ${apellido} ${dni} Tu Lvl es 100% otaku`;
            bienvenida.textContent = `Bienvenido, ${nombre}!`;
        }else {
            resultado.value = `Por favor, completa todos los campos.`;
        
        }
    });
});



