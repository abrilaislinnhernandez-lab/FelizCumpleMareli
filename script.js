const boton = document.getElementById("botonNota");
const mensaje = document.getElementById("mensaje");

const notas = [
    "Mentira, no sé qué voy a decir en inglés pero esta es mi perspectiva. ☕",

    "Le agradezco a tu mamá y a tu papá por haberte educado y hacer de ti lo que eres ahora, deben estar muy orgullosos de ti (porque yo sí).",

    "Sigamos hablando de cincuenta mil cosas sin sentido, it doesn't matter.",

    "Si no quedó claro o si no me expresé más, en conclusión: es uno de los días más agradables que pueda recordar.",

    "¿Tienes alguna duda? Tell me. ✨"
];

boton.addEventListener("click", function () {
    const numero = Math.floor(Math.random() * notas.length);
    mensaje.textContent = notas[numero];
});
