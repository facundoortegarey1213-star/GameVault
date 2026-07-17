const botones = document.querySelectorAll(".consolas button");
const listaJuegos = document.getElementById("lista-juegos");
const contador = document.getElementById("contador");
const progresoTotal = document.getElementById("progreso-total");
const buscador = document.getElementById("buscador");


// Cargar juegos por consola
botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const consolaSeleccionada = boton.textContent;

        const consola = juegos.find(
            item => item.consola === consolaSeleccionada
        );

        listaJuegos.innerHTML = "";

        if (consola) {

            listaJuegos.innerHTML = `
                <h2>🎮 ${consola.consola}</h2>
                <p>${consola.lista.length} juegos en colección</p>
            `;

            let completados = 0;

            consola.lista.forEach(juego => {

                const guardado = localStorage.getItem(juego);

                if (guardado === "completado") {
                    completados++;
                }

                const fecha = localStorage.getItem(juego + "_fecha");

                listaJuegos.innerHTML += `
    <p>
        <label class="juego-item">
            <input type="checkbox"
            ${guardado === "completado" ? "checked" : ""}
            onchange="guardarJuego('${juego}', this.checked)">
            
            <span>${juego}</span>
        </label>

        ${fecha ? "<br>✅ Completado: " + fecha : ""}
    </p>
`;
            });

            contador.textContent =
            "Completados: " + completados + "/" + consola.lista.length;

        } else {

            listaJuegos.innerHTML =
            "<p>Todavía no agregamos juegos de " + consolaSeleccionada + "</p>";

        }

    });

});


// Guardar juegos completados
function guardarJuego(juego, marcado) {

    if (marcado) {

        localStorage.setItem(juego, "completado");

        let fecha = new Date().toLocaleDateString();

        localStorage.setItem(juego + "_fecha", fecha);

    } else {

        localStorage.removeItem(juego);
        localStorage.removeItem(juego + "_fecha");

    }

    actualizarProgresoTotal();
    function exportarProgreso() {

    let datos = {};

    for (let i = 0; i < localStorage.length; i++) {

        let clave = localStorage.key(i);

        datos[clave] = localStorage.getItem(clave);

    }


    let archivo = new Blob(
        [JSON.stringify(datos, null, 2)],
        { type: "application/json" }
    );


    let enlace = document.createElement("a");

    enlace.href = URL.createObjectURL(archivo);

    enlace.download = "mi_progreso_juegos.json";

    enlace.click();

}



function importarProgreso(event) {

    let archivo = event.target.files[0];

    if (!archivo) return;


    let lector = new FileReader();


    lector.onload = function(e) {

        let datos = JSON.parse(e.target.result);


        for (let clave in datos) {

            localStorage.setItem(clave, datos[clave]);

        }


        alert("Progreso importado correctamente");

        location.reload();

    };


    lector.readAsText(archivo);

}
    mostrarUltimosCompletados();

}


// Progreso total
function actualizarProgresoTotal() {

    let total = 0;
    let completados = 0;


    juegos.forEach(consola => {

        consola.lista.forEach(juego => {

            total++;

            if (localStorage.getItem(juego) === "completado") {
                completados++;
            }

        });

    });


    progresoTotal.textContent =
    "Progreso total: " + completados + "/" + total + " juegos";


    let porcentajeCompletado = (completados / total) * 100;


    document.getElementById("barra-progreso").style.width =
    porcentajeCompletado + "%";


    document.getElementById("porcentaje").textContent =
    Math.floor(porcentajeCompletado) + "% completado";

}


// Buscador
buscador.addEventListener("input", () => {

    let texto = buscador.value.toLowerCase();

    if (texto === "") {
        return;
    }


    let resultados = [];


    juegos.forEach(consola => {

        consola.lista.forEach(juego => {

            if (juego.toLowerCase().includes(texto)) {


                let estado =
                localStorage.getItem(juego) === "completado"
                ? "✅ Completado"
                : "⬜ Pendiente";


                resultados.push(
                    juego + " (" + consola.consola + ") " + estado
                );

            }

        });

    });


    listaJuegos.innerHTML = "";


    resultados.forEach(juego => {

        listaJuegos.innerHTML += `
            <p>${juego}</p>
        `;

    });


});


// Ejecutar al cargar
actualizarProgresoTotal();
function mostrarUltimosCompletados() {

    let completados = [];

    juegos.forEach(consola => {

        consola.lista.forEach(juego => {

            let fecha = localStorage.getItem(juego + "_fecha");

            if (fecha) {
                completados.push({
                    nombre: juego,
                    fecha: fecha
                });
            }

        });

    });


    let zona = document.getElementById("ultimos-completados");

    zona.innerHTML = "<h2>🏆 Últimos completados</h2>";


    completados.slice(-5).reverse().forEach(juego => {

        zona.innerHTML += `
            <p>
            🎮 ${juego.nombre}<br>
            ✅ Completado: ${juego.fecha}
            </p>
        `;

    });

}
mostrarUltimosCompletados();
const botonAleatorio = document.getElementById("juego-aleatorio");
const resultadoAleatorio = document.getElementById("resultado-aleatorio");

botonAleatorio.addEventListener("click", () => {

    let pendientes = [];

    juegos.forEach(consola => {

        consola.lista.forEach(juego => {

            if (localStorage.getItem(juego) !== "completado") {

                pendientes.push({
                    nombre: juego,
                    consola: consola.consola
                });

            }

        });

    });


    if (pendientes.length === 0) {

        resultadoAleatorio.innerHTML =
        "🏆 ¡Completaste todos los juegos!";

        return;

    }


    let elegido =
    pendientes[Math.floor(Math.random() * pendientes.length)];


   resultadoAleatorio.classList.add("animando");

resultadoAleatorio.innerHTML = `
🎲 Buscando...
`;

setTimeout(() => {

    resultadoAleatorio.classList.remove("animando");

    resultadoAleatorio.innerHTML = `
        🎉 Tu juego elegido:

        <br><br>

        🎮 ${elegido.nombre}

        <br><br>

        📀 ${elegido.consola}
    `;

}, 1500);

});