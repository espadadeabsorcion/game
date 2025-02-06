const preguntas = [
    { "pregunta": "Chat GPT no es un LLM", "respuesta": "f" },
    { "pregunta": "Talkie puede generar audio", "respuesta": "v" },
    { "pregunta": "SeaArt.ai genera videos", "respuesta": "v" },
    { "pregunta": "LLM significa Learned Language Model", "respuesta": "f" },
    { "pregunta": "MidJourney puede ejecutarse localmente", "respuesta": "f" },
    { "pregunta": "DALL-E puede generar videos a partir de texto.", "respuesta": "f" },
    { "pregunta": "PyTorch es una biblioteca de IA desarrollada por Facebook.", "respuesta": "v" },
    { "pregunta": "TensorFlow es una herramienta desarrollada por Microsoft.", "respuesta": "f" },
    { "pregunta": "DeepMind es una empresa especializada en IA fundada por Google.", "respuesta": "v" },
    { "pregunta": "Stable Diffusion es una herramienta de código abierto para generar imágenes.", "respuesta": "v" },
    { "pregunta": "Suno es una IA generadora de imagenes", "respuesta": "f" },    
    { "pregunta": "LlamaCoder puede generar musica", "respuesta": "f" },   
    { "pregunta": "Runway ML es una plataforma para crear contenido multimedia con IA.", "respuesta": "v" },
    { "pregunta": "Character.AI no puede generar videos", "respuesta": "v" },    
    { "pregunta": "Storynest.AI puede generar videos", "respuesta": "f" },
    { "pregunta": "Copilot soporta programación en bloques", "respuesta": "f" },
    { "pregunta": "Shapes.INC genera chatbots para Whatsapp", "respuesta": "f" },
    { "pregunta": "Ollama no puede ser ejecutado de manera local", "respuesta": "f" },
    { "pregunta": "Pop.AI no es una IA generativa de musica", "respuesta": "v" },   
    { "pregunta": "La IA no puede ser utilizada para crear otras IA", "respuesta": "f" },
    
    { "pregunta": "La IA puede generar texto que parece escrito por un humano.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para optimizar rutas de entrega.", "respuesta": "f" },
    
    { "pregunta": "La IA puede generar imágenes a partir de descripciones textuales.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para crear chatbots.", "respuesta": "f" },
    
    { "pregunta": "La IA puede predecir el clima con mayor precisión que los métodos tradicionales.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para personalizar recomendaciones en plataformas de streaming.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para detectar fraudes en transacciones financieras.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la eficiencia energética en edificios.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para analizar grandes volúmenes de datos en tiempo real.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la seguridad cibernética.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para automatizar tareas repetitivas en la industria.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la experiencia del usuario en aplicaciones móviles.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para crear simulaciones de conducción autónoma.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en diagnósticos médicos.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para optimizar la cadena de suministro en la industria manufacturera.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la calidad de los productos en la industria alimentaria.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para predecir tendencias en el mercado de valores.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la eficiencia en la gestión de recursos humanos.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para crear sistemas de recomendación en comercio electrónico.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de terremotos.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de inventarios.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la calidad del aire en ciudades inteligentes.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de residuos.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de enfermedades.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de tráfico en ciudades.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de desastres naturales.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de energía en hogares.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de resultados deportivos.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de flotas de transporte.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de resultados electorales.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de proyectos.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de productos.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de relaciones con clientes.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la rotación de empleados.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de riesgos financieros.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la propagación de enfermedades.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la cadena de frío en la industria alimentaria.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la calidad del agua.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción en la industria manufacturera.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de energía.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la logística inversa.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la duración de la batería en dispositivos electrónicos.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la cadena de suministro global.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la calidad del suelo.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de energía renovable.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de transporte público.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de alimentos.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de salud.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de medicamentos.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de productos farmacéuticos.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de materiales de construcción.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de productos de consumo.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos electrónicos.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios financieros.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos químicos.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de telecomunicaciones.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos textiles.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de entretenimiento.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de belleza.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de viajes.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de lujo.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de educación.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de seguros.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de moda.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de bienes raíces.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de consumo masivo.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de transporte.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de salud.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de logística.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de construcción.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de energía.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología médica.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de agricultura.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología financiera.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de tecnología.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología de la información.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de tecnología de la comunicación.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología de la educación.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de tecnología de la salud.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología de la energía.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de tecnología de la construcción.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología de la agricultura.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de tecnología de la logística.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología de la manufactura.", "respuesta": "v" },
    
    { "pregunta": "La IA no puede ser utilizada para mejorar la precisión en la predicción de la demanda de servicios de tecnología de la información.", "respuesta": "f" },
    
    { "pregunta": "La IA puede ser utilizada para mejorar la eficiencia en la gestión de la producción de productos de tecnología de la comunicación.", "respuesta": "v" }
];
const sonidoIncorrecto = new Audio("falla.mp3");
const sonidoCorrecto = new Audio("acierta.mp3");
const penn1 = new Audio("pendejo.mp3");
const lee = new Audio("lees.mp3");
const base = new Audio("bases.mp3");
const bie = new Audio("bien.mp3");
const master = new Audio("maestro.mp3");
const sage = new Audio("sabio.mp3");
const legend = new Audio("leyenda.mp3")
let preguntasDisponibles = [...preguntas];
let preguntaActual = null;
let Puntos = 0;
let intervaloTiempo;
let tiempoRestante = 30;

function iniciarTemporizador() {
    document.getElementById("tiempo").textContent = `Tiempo: ${tiempoRestante}s`;
    if (intervaloTiempo) clearInterval(intervaloTiempo);
    intervaloTiempo = setInterval(actualizarTiempo, 1000);
}

function actualizarTiempo() {
    document.getElementById("tiempo").textContent = `Tiempo: ${tiempoRestante}s`;

    if (tiempoRestante <= 0) {
        bloquearTodo();
        return;
    }

    tiempoRestante--;
}

function detenerTemporizador() {
    clearInterval(intervaloTiempo);
    document.getElementById("b1").classList.remove("bo");
    document.getElementById("b2").classList.remove("bo");
    document.getElementById("b1").classList.remove("verd");
    document.getElementById("b2").classList.remove("fals");
    document.getElementById("b1").classList.add("bot");
    document.getElementById("b2").classList.add("bot");
    document.getElementById("b1").textContent = "Reiniciar";
    document.getElementById("b2").textContent = "Reiniciar";
}

function bloquearTodo() {
    detenerTemporizador();
    document.getElementById("t1").textContent = "¡Se acabó el tiempo!";
    document.getElementById("b1").classList.add("inactive");
    document.getElementById("b2").classList.add("inactive");
    document.getElementById("b1").classList.remove("active");
    document.getElementById("b2").classList.remove("active");
    verificarRecompensa();
}

function nuevaPregunta() {
    if (preguntasDisponibles.length === 0) {
        document.getElementById("t1").textContent = "¡Felicitaciones! Has completado todas las preguntas.";
        detenerTemporizador();
        verificarRecompensa();
        return;
    }

    let index = Math.floor(Math.random() * preguntasDisponibles.length);
    preguntaActual = preguntasDisponibles[index];
    preguntasDisponibles.splice(index, 1);

    document.getElementById("t1").textContent = preguntaActual.pregunta;

    document.getElementById("b1").classList.add("active");
    document.getElementById("b2").classList.add("active");
    document.getElementById("b1").classList.remove("inactive");
    document.getElementById("b2").classList.remove("inactive");
}

function verificarRespuesta(respuestaUsuario) {
    if (!preguntaActual) return;

    document.getElementById("b1").classList.add("inactive");
    document.getElementById("b2").classList.add("inactive");
    document.getElementById("b1").classList.remove("active");
    document.getElementById("b2").classList.remove("active");

    let esCorrecto = respuestaUsuario === preguntaActual.respuesta;

    document.getElementById("f1").classList.remove("cuerpo");
    document.getElementById("f1").classList.add(esCorrecto ? "si" : "no");
    if (esCorrecto) {
        sonidoCorrecto.play();
        Puntos += 10;
        tiempoRestante += 5;
    } else {
        sonidoIncorrecto.play()
        Puntos = Math.max(0, Puntos - 10);
    }
    setTimeout(() => {
        document.getElementById("f1").classList.add("cuerpo");
        document.getElementById("f1").classList.remove(esCorrecto ? "si" : "no");

        document.getElementById("puntero").textContent = `Puntos: ${Puntos}`;
            
        nuevaPregunta();
    }, 1000);
}

function verificarRecompensa() {
    let mensaje = "";

    if (Puntos === 0) {
        mensaje = "Pendejo N.1";
        penn1.play();
    } else if (Puntos >= 10 && Puntos < 50) {
        mensaje = "Bueno..... Al menos sabes leer";
        lee.play();
    } else if (Puntos >= 50 && Puntos < 100) {
        mensaje = "Tienes bases";
        base.play();
    } else if (Puntos >= 100 && Puntos < 200) {
        mensaje = "Bien hecho";
        bie.play();
    } else if (Puntos >= 200 && Puntos < 500) {
        mensaje = "Maestro";
        master.play()
    } else if (Puntos >= 500 && Puntos < 1000) {
        mensaje = "Sabio";
        sage.play()
    } else if (Puntos >= 1000) {
        mensaje = "Leyenda";
        legend.play()
    }

    document.getElementById("t1").textContent = mensaje;
    document.getElementById("t1").classList.add("te");

    const boton1 = document.getElementById("b1");
    const boton2 = document.getElementById("b2");
    if (boton1) boton1.remove();
    if (boton2) boton2.remove();

    const botonReinicio = document.createElement("button");
    botonReinicio.textContent = "Reiniciar Juego";
    botonReinicio.id = "reiniciar";
    botonReinicio.onclick = reiniciarJuego;
    botonReinicio.classList.add("col-3");
    botonReinicio.classList.add("fs-3");
    botonReinicio.classList.add("fs-sm-5");
    botonReinicio.classList.add("btn");
    botonReinicio.classList.add("bot");
    botonReinicio.classList.add("text-light");
    botonReinicio.classList.add("text-decoration-none");
    document.getElementById("f2").appendChild(botonReinicio);
}

function reiniciarJuego() {
    document.location.href = "index.html";
}
function iniciarJuego() {
    document.location.href = "juego.html";
}

nuevaPregunta();
iniciarTemporizador();
