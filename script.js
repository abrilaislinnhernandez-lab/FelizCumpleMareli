// ===========================
// BOTÓN "ABRIR MI REGALO"
// ===========================

const inicio = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const contenido = document.getElementById("contenido");

inicio.addEventListener("click", () => {

    loader.style.display = "none";
    contenido.classList.remove("hidden");

});


// ===========================
// CONTADOR DEL CUMPLEAÑOS
// ===========================

const inicioCumple = new Date(2026, 6, 23, 0, 0, 0); // 23 julio 2026 00:00:00
const finCumple = new Date(2026, 6, 24, 0, 0, 0);    // 24 julio 2026 00:00:00

function actualizarContador() {

    const ahora = new Date();

    // Antes del cumpleaños
    if (ahora < inicioCumple) {

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    // Después del cumpleaños
    if (ahora >= finCumple) {

        document.getElementById("dias").textContent = "01";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const diferencia = ahora - inicioCumple;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) /
        1000
    );

    document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
    document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");

}

actualizarContador();

setInterval(actualizarContador, 1000);