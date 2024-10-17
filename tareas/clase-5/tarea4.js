document.addEventListener('DOMContentLoaded', function() {
    const listaElementos = document.querySelectorAll('#lista-numeros li');
    const numeros = Array.from(listaElementos).map(li => Number(li.textContent));
    const promedioEl = document.querySelector('#promedio');
    const minimoEl = document.querySelector('#minimo');
    const maximoEl = document.querySelector('#maximo');
    const frecuenteEl = document.querySelector('#frecuente');
    function calcularPromedio(arr) {
        const suma = arr.reduce((acumulado, actual) => acumulado + actual, 0);
        return (suma / arr.length).toFixed(2);
    }

    function obtenerMinimo(arr) {
        return Math.min(...arr);
    }

    function obtenerMaximo(arr) {
        return Math.max(...arr);
    }

    function obtenerFrecuente(arr) {
        const contador = {};
        arr.forEach(num => {
            contador[num] = (contador[num] || 0) + 1;
        });

        let maxFrecuencia = 0;
        let numFrecuente = arr[0];
        for (const num in contador) {
            if (contador[num] > maxFrecuencia) {
                maxFrecuencia = contador[num];
                numFrecuente = num;
            }
        }
        return numFrecuente;
    }

    document.querySelector('#calcular').addEventListener('click', function() {
        const promedio = calcularPromedio(numeros);
        promedioEl.textContent = `Promedio de asistencia: ${promedio}`;
        const minimo = obtenerMinimo(numeros);
        minimoEl.textContent = `La menor concurrencia: ${minimo}`;
        const maximo = obtenerMaximo(numeros);
        maximoEl.textContent = `Concurrencia máxima: ${maximo}`;
        const frecuente = obtenerFrecuente(numeros);
        frecuenteEl.textContent = `La cantidad más frecuente es: ${frecuente}`;
    });
});
