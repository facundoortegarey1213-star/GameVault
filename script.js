// ==========================================
// GAMEVAULT - SCRIPT COMPLETO Y UNIFICADO
// ==========================================

// --- Selección de Elementos DOM ---
const botones = document.querySelectorAll(".consolas button");
const listaJuegos = document.getElementById("lista-juegos");
const contador = document.getElementById("contador");
const progresoTotal = document.getElementById("progreso-total");
const buscador = document.getElementById("buscador");
const botonAleatorio = document.getElementById("juego-aleatorio");
const resultadoAleatorio = document.getElementById("resultado-aleatorio");

// --- Helper Consolas ---
function coincideConsola(consolaJuego, consolaBoton) {
    if (!consolaJuego || !consolaBoton) return false;
    const c1 = consolaJuego.toLowerCase().trim();
    const c2 = consolaBoton.toLowerCase().trim();
    if (c1 === c2) return true;
    
    const partes = c1.split('/').map(p => p.trim());
    if (partes.some(p => p === c2)) return true;

    const mapa = {
        "nes": ["nes", "nintendo entertainment system"],
        "snes": ["snes", "super nintendo"],
        "sega mega drive": ["sega mega drive / genesis", "sega mega drive", "genesis"],
        "sega cd": ["sega cd / mega-cd", "sega cd", "mega-cd"],
        "sega saturn": ["sega saturn"],
        "dreamcast": ["sega dreamcast", "dreamcast"],
        "game boy": ["game boy", "gb"],
        "game boy color": ["game boy color", "gbc"],
        "game boy advance": ["game boy advance", "gba"],
        "gamecube": ["nintendo gamecube", "gamecube", "ngc"],
        "pc": ["pc / windows", "pc", "windows"],
        "ps1": ["ps1", "playstation 1", "playstation", "psx"],
        "playstation": ["ps1", "playstation 1", "playstation", "psx"],
        "playstation 1": ["ps1", "playstation 1", "playstation", "psx"],
        "psx": ["ps1", "playstation 1", "playstation", "psx"],
        "ps2": ["ps2", "playstation 2"],
        "playstation 2": ["ps2", "playstation 2"],
        "ps3": ["ps3", "playstation 3"],
        "playstation 3": ["ps3", "playstation 3"],
        "ps4": ["ps4", "playstation 4"],
        "playstation 4": ["ps4", "playstation 4"],
        "ps5": ["ps5", "playstation 5"],
        "playstation 5": ["ps5", "playstation 5"],
        "psp": ["psp", "playstation portable"],
        "playstation portable": ["psp", "playstation portable"],
        "ps vita": ["ps vita", "playstation vita"],
        "playstation vita": ["ps vita", "playstation vita"]
    };

    return mapa[c2] ? mapa[c2].includes(c1) : c1 === c2;
}

// --- Toggle Ficha ---
function toggleFicha(btn) {
    const contenedor = btn.closest('.contenedor-juego');
    if (!contenedor) return;
    const ficha = contenedor.querySelector('.ficha-card');
    if (ficha) {
        ficha.style.display = (ficha.style.display === 'block') ? 'none' : 'block';
    }
}

// --- Extraer Todos los Juegos ---
function obtenerTodosLosJuegos() {
    let listaProcesada = [];
    if (typeof juegos === 'undefined') return listaProcesada;

    if (!Array.isArray(juegos) && typeof juegos === 'object') {
        for (const consolaKey in juegos) {
            if (Array.isArray(juegos[consolaKey])) {
                juegos[consolaKey].forEach(juego => {
                    const nombre = typeof juego === 'string' ? juego : (juego?.titulo || juego?.nombre);
                    const duracion = typeof juego === 'object' ? juego?.duracion : null;
                    const anio = typeof juego === 'object' ? (juego?.anio || juego?.year || "N/A") : "N/A";
                    const genero = typeof juego === 'object' ? (juego?.genero || "N/A") : "N/A";
                    const desarrolladora = typeof juego === 'object' ? (juego?.desarrolladora || juego?.developer || "N/A") : "N/A";
                    if (nombre) {
                        listaProcesada.push({ nombre, duracion, anio, genero, desarrolladora, consola: consolaKey });
                    }
                });
            }
        }
        return listaProcesada;
    }

    if (Array.isArray(juegos)) {
        juegos.forEach(item => {
            if (item && item.lista && Array.isArray(item.lista)) {
                const nombreConsola = item.consola || item.plataforma || "Consola";
                item.lista.forEach(juego => {
                    const nombre = typeof juego === 'string' ? juego : (juego?.titulo || juego?.nombre);
                    const duracion = typeof juego === 'object' ? juego?.duracion : null;
                    const anio = typeof juego === 'object' ? (juego?.anio || juego?.year || "N/A") : "N/A";
                    const genero = typeof juego === 'object' ? (juego?.genero || "N/A") : "N/A";
                    const desarrolladora = typeof juego === 'object' ? (juego?.desarrolladora || juego?.developer || "N/A") : "N/A";
                    if (nombre) {
                        listaProcesada.push({ nombre, duracion, anio, genero, desarrolladora, consola: nombreConsola });
                    }
                });
            } else if (item && typeof item === 'object') {
                const nombre = item.titulo || item.nombre;
                const duracion = item.duracion;
                const anio = item.anio || item.year || "N/A";
                const genero = item.genero || "N/A";
                const desarrolladora = item.desarrolladora || item.developer || "N/A";
                const nombreConsola = item.plataforma || item.consola || "Consola";
                if (nombre) {
                    listaProcesada.push({ nombre, duracion, anio, genero, desarrolladora, consola: nombreConsola });
                }
            }
        });
    }

    return listaProcesada;
}

// --- Renderizar Juegos por Consola ---
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const consolaSeleccionada = boton.textContent.trim();
        const todosLosJuegos = obtenerTodosLosJuegos();
        const juegosFiltrados = todosLosJuegos.filter(j => coincideConsola(j.consola, consolaSeleccionada));

        listaJuegos.innerHTML = "";

        if (juegosFiltrados.length > 0) {
            listaJuegos.innerHTML = `
                <h2>🎮 ${consolaSeleccionada}</h2>
                <p>${juegosFiltrados.length} juegos en colección</p>
            `;

            let completados = 0;

            juegosFiltrados.forEach(juego => {
                const guardado = localStorage.getItem(juego.nombre);
                if (guardado === "completado") completados++;

                const fecha = localStorage.getItem(juego.nombre + "_fecha");
                const horasGuardadas = localStorage.getItem(juego.nombre + "_horas") || "";
                const notaGuardada = localStorage.getItem(juego.nombre + "_nota") || "0";
                const estadoJuego = localStorage.getItem(juego.nombre + "_estado") || "Pendiente";
                const notaTexto = localStorage.getItem(juego.nombre + "_nota_texto") || "";
                const esJugando = estadoJuego.toLowerCase() === "jugando" ? " 🎮" : "";
                const nombreEscapado = juego.nombre.replace(/'/g, "\\'");

                listaJuegos.innerHTML += `
                <div class="contenedor-juego" style="margin-bottom: 12px;">
                    <p style="display: flex; justify-content: space-between; align-items: center; margin: 0;">
                        <label class="juego-item">
                            <input type="checkbox"
                            ${guardado === "completado" ? "checked" : ""}
                            onchange="guardarJuego('${nombreEscapado}', this.checked)">
                            
                            <span>${juego.nombre}${esJugando} ${juego.duracion ? `<small style="color: #aaa; margin-left: 8px;">⏱️ ${juego.duracion}</small>` : ''}</span>
                        </label>

                        <button type="button" class="btn-ficha" onclick="toggleFicha(this)">📋 Ficha</button>
                    </p>
                    
                    <div class="ficha-card" style="display: none; background: #111; border: 1px dashed #444; padding: 10px; margin-top: 8px; border-radius: 8px;">
                        <p>📅 <strong>Año:</strong> ${juego.anio}</p>
                        <p>🎭 <strong>Género:</strong> ${juego.genero}</p>
                        <p>🏢 <strong>Desarrolladora:</strong> ${juego.desarrolladora}</p>
                        ${fecha ? `<p style="margin-top: 6px !important; color: #64dd17;">✅ Completado el: ${fecha}</p>` : ''}
                        
                        <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid #333; display: flex; flex-direction: column; gap: 8px;">
                            <label style="color: #64b5f6; font-weight: bold;">📌 Estado actual: 
                                <select onchange="localStorage.setItem('${nombreEscapado}_estado', this.value);" style="background: #222; color: #fff; border: 1px solid #444; padding: 4px; border-radius: 4px; margin-left: 5px;">
                                    <option value="Pendiente" ${estadoJuego.toLowerCase() === "pendiente" ? "selected":""}>⏳ Pendiente</option>
                                    <option value="Jugando" ${estadoJuego.toLowerCase() === "jugando" ? "selected":""}>🎮 Jugando</option>
                                    <option value="Completado" ${estadoJuego.toLowerCase() === "completado" ? "selected":""}>🏆 Completado</option>
                                    <option value="Abandonado" ${estadoJuego.toLowerCase() === "abandonado" ? "selected":""}>❌ Abandonado</option>
                                </select>
                            </label>

                            <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                                <label style="color: #bbb; font-weight: bold;">⏱️ Horas: 
                                    <input type="number" id="horas-${juego.nombre}" value="${horasGuardadas}" style="width: 60px; background: #222; color: #fff; border: 1px solid #444; padding: 4px; border-radius: 4px;" onchange="guardarDetallesJuego('${nombreEscapado}')">
                                </label>

                                <label style="color: #ffd700; font-weight: bold;">⭐ Nota: 
                                    <select id="nota-${juego.nombre}" onchange="guardarDetallesJuego('${nombreEscapado}')" style="background: #222; color: #fff; border: 1px solid #444; padding: 4px; border-radius: 4px;">
                                        <option value="0" ${notaGuardada == "0" ? "selected":""}>Sin calificar</option>
                                        <option value="1" ${notaGuardada == "1" ? "selected":""}>1/5</option>
                                        <option value="2" ${notaGuardada == "2" ? "selected":""}>2/5</option>
                                        <option value="3" ${notaGuardada == "3" ? "selected":""}>3/5</option>
                                        <option value="4" ${notaGuardada == "4" ? "selected":""}>4/5</option>
                                        <option value="5" ${notaGuardada == "5" ? "selected":""}>5/5</option>
                                    </select>
                                </label>
                            </div>

                            <label style="color: #bbb; font-weight: bold; margin-top: 4px;">📝 Notas:
                                <textarea 
                                    placeholder="Anotá trucos, claves o impresiones..." 
                                    onchange="guardarNotaPersonal('${nombreEscapado}', this.value)"
                                    style="width: 100%; height: 50px; background: #181818; color: #fff; border: 1px solid #444; border-radius: 6px; padding: 6px; font-size: 0.85em; resize: vertical; margin-top: 4px;"
                                >${notaTexto}</textarea>
                            </label>
                        </div>
                    </div>
                </div>
                `;
            });

            if (contador) contador.textContent = "Completados: " + completados + "/" + juegosFiltrados.length;
        } else {
            listaJuegos.innerHTML = "<p>Todavía no hay juegos cargados para " + consolaSeleccionada + "</p>";
        }
    });
});

// --- Guardar Datos ---
function guardarNotaPersonal(nombreJuego, texto) {
    localStorage.setItem(nombreJuego + "_nota_texto", texto);
}

function guardarDetallesJuego(nombreJuego) {
    const horas = document.getElementById(`horas-${nombreJuego}`)?.value || 0;
    const nota = document.getElementById(`nota-${nombreJuego}`)?.value || 0;

    localStorage.setItem(`${nombreJuego}_horas`, horas);
    localStorage.setItem(`${nombreJuego}_nota`, nota);

    actualizarEstadisticas();
}

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
    mostrarUltimosCompletados();
    verificarLogros();
    actualizarEstadisticas();
}

// --- Importar / Exportar ---
function exportarProgreso() {
    let datos = {};
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        datos[clave] = localStorage.getItem(clave);
    }

    let archivo = new Blob([JSON.stringify(datos, null, 2)], { type: "application/json" });
    let enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(archivo);
    enlace.download = "GameVault_progreso.json";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
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
        alert("¡Progreso importado con éxito!");
        location.reload();
    };
    lector.readAsText(archivo);
}

// --- Progreso Global y Estadísticas ---
function actualizarProgresoTotal() {
    const todosLosJuegos = obtenerTodosLosJuegos();
    let total = todosLosJuegos.length;
    let completados = 0;

    todosLosJuegos.forEach(juego => {
        if (localStorage.getItem(juego.nombre) === "completado") {
            completados++;
        }
    });

    if (progresoTotal) {
        progresoTotal.textContent = "Progreso total: " + completados + "/" + total + " juegos";
    }

    let porcentajeCompletado = total > 0 ? (completados / total) * 100 : 0;

    const barra = document.getElementById("barra-progreso");
    if (barra) {
        barra.style.width = porcentajeCompletado + "%";
    }

    const elemPorcentaje = document.getElementById("porcentaje");
    if (elemPorcentaje) {
        elemPorcentaje.textContent = Math.floor(porcentajeCompletado) + "% completado";
    }
}

function actualizarEstadisticas() {
    const todos = obtenerTodosLosJuegos();
    let horasTotales = 0;
    let sumaNotas = 0;
    let jugadosConNota = 0;
    let conteoConsolas = {};

    todos.forEach(juego => {
        const h = parseFloat(localStorage.getItem(`${juego.nombre}_horas`)) || 0;
        const n = parseFloat(localStorage.getItem(`${juego.nombre}_nota`)) || 0;
        const comp = localStorage.getItem(juego.nombre) === "completado";

        horasTotales += h;
        if (n > 0) {
            sumaNotas += n;
            jugadosConNota++;
        }

        if (comp) {
            conteoConsolas[juego.consola] = (conteoConsolas[juego.consola] || 0) + 1;
        }
    });

    let topConsola = "-";
    let maxComp = 0;
    for (const [consola, count] of Object.entries(conteoConsolas)) {
        if (count > maxComp) {
            maxComp = count;
            topConsola = consola;
        }
    }

    const elemHoras = document.getElementById("stat-horas");
    const elemNota = document.getElementById("stat-nota");
    const elemConsola = document.getElementById("stat-consola");

    if (elemHoras) elemHoras.textContent = `${horasTotales}h`;
    if (elemNota) elemNota.textContent = jugadosConNota > 0 ? `${(sumaNotas / jugadosConNota).toFixed(1)}/5 ⭐` : "0/5";
    if (elemConsola) elemConsola.textContent = topConsola;
}

// --- Buscador ---
if (buscador) {
    buscador.addEventListener("input", () => {
        let texto = buscador.value.toLowerCase().trim();
        let resultados = [];

        if (texto === "") {
            listaJuegos.innerHTML = "";
            return;
        }

        const todosLosJuegos = obtenerTodosLosJuegos();

        todosLosJuegos.forEach(juego => {
            if (juego.nombre.toLowerCase().includes(texto)) {
                let estado = localStorage.getItem(juego.nombre) === "completado"
                    ? "✅ Completado"
                    : "⬜ Pendiente";

                const duracionStr = juego.duracion ? ` ⏱️ ${juego.duracion}` : '';
                resultados.push(`${juego.nombre}${duracionStr} (<strong>${juego.consola}</strong>) — ${estado}`);
            }
        });

        listaJuegos.innerHTML = "";

        if (resultados.length > 0) {
            resultados.forEach(juego => {
                listaJuegos.innerHTML += `<p>${juego}</p>`;
            });
        } else {
            listaJuegos.innerHTML = "<p>No se encontraron juegos con ese nombre.</p>";
        }
    });
}

// --- Últimos Completados ---
function mostrarUltimosCompletados() {
    let completados = [];
    const todosLosJuegos = obtenerTodosLosJuegos();

    todosLosJuegos.forEach(juego => {
        let fecha = localStorage.getItem(juego.nombre + "_fecha");
        if (fecha) {
            completados.push({
                nombre: juego.nombre,
                fecha: fecha
            });
        }
    });

    let zona = document.getElementById("ultimos-completados");
    if (!zona) return;

    zona.innerHTML = "<h2>🏆 Últimos completados</h2>";

    if (completados.length === 0) {
        zona.innerHTML += "<p>Aún no has completado ningún juego.</p>";
        return;
    }

    completados.slice(-5).reverse().forEach(juego => {
        zona.innerHTML += `
            <p>
            🎮 <strong>${juego.nombre}</strong><br>
            ✅ Completado: ${juego.fecha}
            </p>
        `;
    });
}

// --- Ruleta Aleatoria ---
if (botonAleatorio && resultadoAleatorio) {
    botonAleatorio.addEventListener("click", () => {
        const todosLosJuegos = obtenerTodosLosJuegos();
        const pendientes = todosLosJuegos.filter(j => localStorage.getItem(j.nombre) !== "completado");

        if (pendientes.length === 0) {
            resultadoAleatorio.innerHTML = "🏆 ¡Completaste todos los juegos!";
            return;
        }

        botonAleatorio.disabled = true;
        resultadoAleatorio.classList.add("animando");

        let giros = 0;
        const totalGiros = 20;

        const intervalo = setInterval(() => {
            let temp = pendientes[Math.floor(Math.random() * pendientes.length)];
            resultadoAleatorio.innerHTML = `🎰 ${temp.consola}`;
            giros++;

            if (giros >= totalGiros) {
                clearInterval(intervalo);
                resultadoAleatorio.classList.remove("animando");
                botonAleatorio.disabled = false;

                let elegidaConsola = pendientes[Math.floor(Math.random() * pendientes.length)].consola;
                let pendientesConsola = pendientes.filter(j => coincideConsola(j.consola, elegidaConsola)).length;

                resultadoAleatorio.innerHTML = `
                    🎉 Consola elegida:
                    <br><br>
                    🕹️ <strong>${elegidaConsola}</strong>
                    <br><br>
                    📌 ${pendientesConsola} juegos pendientes por completar
                `;
            }
        }, 100);
    });
}

// --- Logros / Medallas ---
function verificarLogros() {
    const completados = document.querySelectorAll('#lista-juegos input[type="checkbox"]:checked').length;

    const logro1 = document.getElementById('logro-1');
    const logro10 = document.getElementById('logro-10');
    const logro25 = document.getElementById('logro-25');

    if (logro1) {
        logro1.classList.toggle('desbloqueado', completados >= 1);
        logro1.classList.toggle('bloqueado', completados < 1);
    }
    if (logro10) {
        logro10.classList.toggle('desbloqueado', completados >= 10);
        logro10.classList.toggle('bloqueado', completados < 10);
    }
    if (logro25) {
        logro25.classList.toggle('desbloqueado', completados >= 25);
        logro25.classList.toggle('bloqueado', completados < 25);
    }
}

document.getElementById('lista-juegos')?.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        verificarLogros();
    }
});

// --- Filtros Rápidos ---
function filtrarEstado(filtro) {
    const tarjetas = document.querySelectorAll(".contenedor-juego");
    tarjetas.forEach(card => {
        const checkbox = card.querySelector("input[type='checkbox']");
        if (!checkbox) return;

        if (filtro === "todos") {
            card.style.display = "block";
        } else if (filtro === "completados" && checkbox.checked) {
            card.style.display = "block";
        } else if (filtro === "pendientes" && !checkbox.checked) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// --- Cambiador de Temas ---
function cambiarTema(nombreTema) {
    document.body.className = nombreTema;
    localStorage.setItem("tema_guardado", nombreTema);
}

const temaGuardado = localStorage.getItem("tema_guardado");
if (temaGuardado) {
    document.body.className = temaGuardado;
    const select = document.getElementById("select-tema");
    if (select) select.value = temaGuardado;
}

// --- Reproductor de Música ---
const playlist = [
    { titulo: "Delfino Plaza From Super Mario Sunshine", archivo: "musica 1.mp3" },
    { titulo: "It's Going Down Now From Persona 3 Reload", archivo: "musica 2.mp3" },
    { titulo: "Chemical Plant Zone From Sonic The Hedgehog 2", archivo: "musica 3.mp3" },
    { titulo: "Gerudo Valley From The Legend of Zelda: Ocarina Of Time", archivo: "musica 4.mp3" },
    { titulo: "Dire, Dire Docks From Super Mario 64", archivo: "musica 5.mp3" },
    { titulo: "Main Theme From Halo: Combat Evolved", archivo: "musica 6.mp3" },
    { titulo: "Athletic Theme From Super Mario Bros 3", archivo: "musica 7.mp3" },
    { titulo: "Lost Woods From The Legend of Zelda: Ocarina of Time", archivo: "musica 8.mp3" },
    { titulo: "The Tragic Prince From Castlevania: Symphony of the Night", archivo: "musica 9.mp3" },
    { titulo: "Escape from the City From Sonic Adventure 2", archivo: "musica 10.mp3" },
    { titulo: "Song of Healing From The Legend of Zelda: Majora's Mask", archivo: "musica 11.mp3" },
    { titulo: "Wily Castle From Mega Man 2", archivo: "musica 12.mp3" },
    { titulo: "Gourmet Race From Kirby Super Star", archivo: "musica 13.mp3" },
    { titulo: "Korobeiniki From Tetris", archivo: "musica 14.mp3" },
    { titulo: "Aquatic Ambience From Donkey Kong Country", archivo: "musica 15.mp3" },
    { titulo: "Lavender Town From Pokémon Red & Blue", archivo: "musica 16.mp3" },
    { titulo: "Hydrogen From Hotline Miami", archivo: "musica 17.mp3" },
    { titulo: "Megalovania From Undertale", archivo: "musica 18.mp3" },
    { titulo: "The Only Thing They Fear Is You From Doom Eternal", archivo: "musica 19.mp3" },
    { titulo: "Last Surprise From Persona 5", archivo: "musica 20.mp3"},
    { titulo: "Zelda's Lullaby From The Legend of Zelda: Skyward Sword", archivo: "musica 21.mp3" },
    { titulo: "Sky Sanctuary (Modern) From Sonic Generations", archivo: "musica 22.mp3"},
    { titulo: "Peaceful Days From Chrono Trigger", archivo: "musica 23.mp3" },
    { titulo: "Survivor From DBZ Budokai Tenkaichi 3", archivo: "musica 24.mp3" },
];

let indiceActual = Math.floor(Math.random() * playlist.length);

const audio = document.getElementById('musica-fondo');
const btnPlay = document.getElementById('btn-musica');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');
const infoMusica = document.getElementById('info-musica');

function cargarCancion(index) {
    if (!audio || !infoMusica) return;
    audio.src = playlist[index].archivo;
    infoMusica.textContent = `🎵 Tema: ${playlist[index].titulo}`;
}

function reproducir() {
    if (!audio) return;
    audio.play().then(() => {
        if (btnPlay) btnPlay.textContent = '⏸️ Pausa';
        if (infoMusica) infoMusica.textContent = `🎵 Sonando: ${playlist[indiceActual].titulo}`;
    }).catch(() => {
        if (btnPlay) btnPlay.textContent = '▶️ Reproducir';
    });
}

function pausar() {
    if (!audio) return;
    audio.pause();
    if (btnPlay) btnPlay.textContent = '▶️ Reproducir';
    if (infoMusica) infoMusica.textContent = `🎵 En pausa: ${playlist[indiceActual].titulo}`;
}

function cancionAleatoria() {
    if (playlist.length <= 1) return;
    let nuevoIndice;
    do {
        nuevoIndice = Math.floor(Math.random() * playlist.length);
    } while (nuevoIndice === indiceActual);
    indiceActual = nuevoIndice;
}

if (btnPlay && audio) {
    cargarCancion(indiceActual);

    const activarAudioAlClic = () => {
        if (audio.paused) {
            reproducir();
        }
        document.removeEventListener('click', activarAudioAlClic);
    };
    document.addEventListener('click', activarAudioAlClic);

    btnPlay.addEventListener('click', (e) => {
        e.stopPropagation();
        if (audio.paused) {
            reproducir();
        } else {
            pausar();
        }
    });

    btnNext?.addEventListener('click', (e) => {
        e.stopPropagation();
        cancionAleatoria();
        cargarCancion(indiceActual);
        reproducir();
    });

    btnPrev?.addEventListener('click', (e) => {
        e.stopPropagation();
        cancionAleatoria();
        cargarCancion(indiceActual);
        reproducir();
    });

    audio.addEventListener('ended', () => {
        cancionAleatoria();
        cargarCancion(indiceActual);
        reproducir();
    });
}

// --- Carga Inicial ---
actualizarProgresoTotal();
mostrarUltimosCompletados();
actualizarEstadisticas();
verificarLogros();
// --- TOP 10 FAVORITOS FIX ---
function renderizarTop10() {
    const contenedor = document.getElementById("lista-top10");
    if (!contenedor) return;

    const todos = obtenerTodosLosJuegos();
    if (!todos || todos.length === 0) {
        contenedor.innerHTML = "<p style='color: #888;'>Cargá tus juegos primero.</p>";
        return;
    }

    // Ordenar alfabéticamente sin romper si falta algún nombre
    todos.sort((a, b) => (a.nombre || "").localeCompare(b.nombre || ""));

    let html = "";

    for (let i = 1; i <= 10; i++) {
        const juegoGuardado = localStorage.getItem(`top10_puesto_${i}`) || "";

        let opcionesHTML = `<option value="">-- Vacío --</option>`;
        todos.forEach(j => {
            const valor = `${j.nombre} (${j.consola})`;
            const seleccionado = valor === juegoGuardado ? "selected" : "";
            opcionesHTML += `<option value="${valor}" ${seleccionado}>${j.nombre} [${j.consola}]</option>`;
        });

        html += `
            <div class="top10-item" style="display: flex; gap: 10px; margin-bottom: 6px;">
                <span class="top10-puesto" style="color: #ffd700; font-weight: bold;">#${i}</span>
                <select class="top10-select" onchange="guardarPuestoTop10(${i}, this.value)" style="flex-grow: 1; background: #111; color: #fff; border: 1px solid #444; padding: 6px; border-radius: 4px;">
                    ${opcionesHTML}
                </select>
            </div>
        `;
    }

    contenedor.innerHTML = html;
}

function guardarPuestoTop10(puesto, valor) {
    if (valor) {
        localStorage.setItem(`top10_puesto_${puesto}`, valor);
    } else {
        localStorage.removeItem(`top10_puesto_${puesto}`);
    }
}

// Ejecutar al cargar
document.addEventListener("DOMContentLoaded", renderizarTop10);
renderizarTop10();