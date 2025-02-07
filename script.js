document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const lanternContainer = document.querySelector(".lantern-container");
    const starContainer = document.querySelector(".stars");
    document.addEventListener("click", function() {
        let music = document.getElementById("music");
        if (music.paused) {
            music.play().catch(error => console.log("Error al reproducir música:", error));
        }
    });
    let moveCount = 0;

    // Restauré la función anterior del botón "No" para que solo se mueva sin desaparecer
    noButton.addEventListener("mouseover", function() {
        moveCount++;

        let maxX = Math.min(window.innerWidth - noButton.clientWidth, 700);
        let maxY = Math.min(window.innerHeight - noButton.clientHeight, 500);

        let x = Math.random() * maxX;
        let y = Math.random() * maxY;

        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Acción cuando se presiona "Sí"
    yesButton.addEventListener("click", function() {
        document.querySelector(".container").innerHTML = `<h1>¡Sabía que dirías que sí! 💖</h1>`;
        spawnLanterns();
    });

    // Generar linternas pero bajando en vez de subir
    function spawnLanterns() {
        setInterval(() => {
            const lantern = document.createElement("img");
            lantern.src = "linterna.png";
            lantern.classList.add("lantern");

            // Aparecen en la parte superior con una posición aleatoria
            lantern.style.left = `${Math.random() * 100}vw`;
            lantern.style.top = `-10vh`;

            // Configuración de la animación
            let duration = Math.random() * 5 + 3; // Entre 3 y 8 segundos
            lantern.style.animationDuration = `${duration}s`;

            lanternContainer.appendChild(lantern);

            // Se elimina solo cuando pasa el límite inferior
            setTimeout(() => {
                lantern.remove();
            }, duration * 1000 + 2000); // 2s extra para asegurarse de que desaparezca fuera de pantalla
        }, 500); // Aumenté la frecuencia de las linternas
    }

    // Generar estrellas en el fondo
    function createStars() {
        for (let i = 0; i < 100; i++) {
            let star = document.createElement("div");
            star.classList.add("star");

            let size = Math.random() * 3 + 1;
            let posX = Math.random() * window.innerWidth;
            let posY = Math.random() * window.innerHeight;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${posX}px`;
            star.style.top = `${posY}px`;

            starContainer.appendChild(star);
        }
    }

    createStars();
    spawnLanterns();
});
