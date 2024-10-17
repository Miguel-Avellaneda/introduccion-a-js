document.addEventListener('DOMContentLoaded', function(){
    const claseUno = document.querySelector('#claseUno');
    const claseDos = document.querySelector('#claseDos');
    const claseTres = document.querySelector('#claseTres');
    const claseCuatro = document.querySelector('#claseCuatro');
    const claseCinco = document.querySelector('#claseCinco');
    const botonIngresar = document.querySelector('#presionar');
    const resultado = document.querySelector('#resultado');
    
    function validarFormatoHora(tiempo) {
        const regex = /^([0-9]{1,2}):([0-5][0-9]):([0-5][0-9])$/;
        return regex.test(tiempo);
        }
    
        botonIngresar.addEventListener('click', function () {
            const tiempos = [
                claseUno.value,
                claseDos.value,
                claseTres.value,
                claseCuatro.value,
                claseCinco.value
            ];

            const tiemposValidos = tiempos.every(validarFormatoHora);
    
            if (!tiemposValidos) {
                resultado.value = "Por favor, ingresa los tiempos en el formato correcto (hh:mm:ss) y asegúrate de que los minutos y segundos sean válidos.";
                return;
            }
    
            let totalHoras = 0;
            let totalMinutos = 0;
            let totalSegundos = 0;
    
            tiempos.forEach(tiempo => {
                const [horas, minutos, segundos] = tiempo.split(':').map(Number);
                totalHoras += horas;
                totalMinutos += minutos; 
                totalSegundos += segundos;
            });
    
            totalMinutos += Math.floor(totalSegundos / 60); 
            totalSegundos = totalSegundos % 60;             
            totalHoras += Math.floor(totalMinutos / 60); 
            totalMinutos = totalMinutos % 60;             
            resultado.value = `El tiempo total es: ${totalHoras} horas, ${totalMinutos} minutos, y ${totalSegundos} segundos.`;
        });
    });
    