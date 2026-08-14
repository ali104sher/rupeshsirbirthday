/* =========================================
   GET ALL ELEMENTS
========================================= */

const screens = document.querySelectorAll(".screen");

const openBtn = document.getElementById("openBtn");

const tryBtn = document.getElementById("tryBtn");
const promiseBtn = document.getElementById("promiseBtn");

const photosBtn = document.getElementById("photosBtn");
const reportBtn = document.getElementById("reportBtn");
const examBtn = document.getElementById("examBtn");

const memoryCards = document.querySelectorAll(".memory-card");

const memoryPopup = document.getElementById("memoryPopup");
const closePopup = document.getElementById("closePopup");

const popupEmoji = document.getElementById("popupEmoji");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const polaroids = document.querySelectorAll(".polaroid");

const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const photoClose = document.getElementById("photoClose");

const options = document.querySelectorAll(".option");
const correctAnswer = document.getElementById("correctAnswer");

const birthdayReveal = document.getElementById("birthdayReveal");


/* =========================================
   SCREEN NAVIGATION
========================================= */

function showScreen(screenId) {

    const currentScreen =
        document.querySelector(".screen.active");


    if (currentScreen) {

        currentScreen.classList.remove("active");

    }


    setTimeout(() => {

        const nextScreen =
            document.getElementById(screenId);


        if (nextScreen) {

            nextScreen.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    }, 250);

}


/* =========================================
   SCREEN 1 → SCREEN 2
========================================= */

if (openBtn) {

    openBtn.addEventListener("click", () => {

        showScreen("screen2");

    });

}


/* =========================================
   SCREEN 2 → SCREEN 3
   BOTH BUTTONS WORK 😭
========================================= */

if (tryBtn) {

    tryBtn.addEventListener("click", () => {

        showScreen("screen3");

    });

}


if (promiseBtn) {

    promiseBtn.addEventListener("click", () => {

        showScreen("screen3");

    });

}


/* =========================================
   SCREEN 3 → SCREEN 4
========================================= */

if (photosBtn) {

    photosBtn.addEventListener("click", () => {

        showScreen("screen4");

    });

}


/* =========================================
   SCREEN 4 → SCREEN 5
========================================= */

if (reportBtn) {

    reportBtn.addEventListener("click", () => {

        showScreen("screen5");

    });

}


/* =========================================
   SCREEN 5 → SCREEN 6
========================================= */

if (examBtn) {

    examBtn.addEventListener("click", () => {

        showScreen("screen6");

    });

}


/* =========================================
   MEMORY CARD POPUPS
========================================= */

memoryCards.forEach((card) => {

    card.addEventListener("click", () => {

        const emoji =
            card.querySelector(".card-emoji")
                .textContent;

        const title =
            card.dataset.title;

        const text =
            card.dataset.text;


        popupEmoji.textContent = emoji;

        popupTitle.textContent = title;

        popupText.textContent = text;


        memoryPopup.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closeMemoryPopup() {

    if (!memoryPopup) return;

    memoryPopup.classList.remove("show");

    document.body.style.overflow = "";

}


if (closePopup) {

    closePopup.addEventListener(
        "click",
        closeMemoryPopup
    );

}


/* Click outside popup */

if (memoryPopup) {

    memoryPopup.addEventListener(
        "click",
        (event) => {

            if (event.target === memoryPopup) {

                closeMemoryPopup();

            }

        }
    );

}


/* =========================================
   PHOTO MODAL
========================================= */

polaroids.forEach((photo) => {

    photo.addEventListener("click", () => {

        const image =
            photo.querySelector("img");


        if (!image) return;


        modalImage.src =
            image.src;


        photoModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


function closePhotoModal() {

    if (!photoModal) return;

    photoModal.classList.remove("show");

    document.body.style.overflow = "";

}


if (photoClose) {

    photoClose.addEventListener(
        "click",
        closePhotoModal
    );

}


/* Click outside image */

if (photoModal) {

    photoModal.addEventListener(
        "click",
        (event) => {

            if (event.target === photoModal) {

                closePhotoModal();

            }

        }
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMemoryPopup();

            closePhotoModal();

        }

    }
);


/* =========================================
   WRONG ANSWERS 😭
========================================= */

options.forEach((option) => {

    if (!option.classList.contains("correct-option")) {

        option.addEventListener("click", () => {

            option.classList.add("wrong");


            setTimeout(() => {

                option.classList.remove("wrong");

            }, 700);

        });

    }

});


/* =========================================
   CORRECT ANSWER
========================================= */

if (correctAnswer) {

    correctAnswer.addEventListener("click", () => {

        /* Prevent multiple clicks */

        correctAnswer.style.pointerEvents = "none";


        /* Visual effect */

        correctAnswer.style.background =
            "var(--orange)";

        correctAnswer.style.color =
            "white";


        shakeScreen();


        /* Wait for dramatic effect */

        setTimeout(() => {

            showScreen("screen7");


            /* Reveal birthday message */

            setTimeout(() => {

                if (birthdayReveal) {

                    birthdayReveal.classList.add(
                        "show"
                    );

                }


                createConfetti();

            }, 2200);

        }, 900);

    });

}


/* =========================================
   SCREEN SHAKE
========================================= */

function shakeScreen() {

    const currentScreen =
        document.querySelector(".screen.active");


    if (!currentScreen) return;


    currentScreen.animate(

        [

            {
                transform: "translateX(0)"
            },

            {
                transform: "translateX(-10px)"
            },

            {
                transform: "translateX(10px)"
            },

            {
                transform: "translateX(-7px)"
            },

            {
                transform: "translateX(7px)"
            },

            {
                transform: "translateX(-4px)"
            },

            {
                transform: "translateX(4px)"
            },

            {
                transform: "translateX(0)"
            }

        ],

        {

            duration: 600,

            easing: "ease-in-out"

        }

    );

}


/* =========================================
   CONFETTI MAGIC 🎉
========================================= */

function createConfetti() {

    const finalScreen =
        document.getElementById("screen7");


    if (!finalScreen) return;


    const symbols = [

        "✨",
        "🎉",
        "✦",
        "★",
        "🎂",
        "✧"

    ];


    for (let i = 0; i < 100; i++) {

        const confetti =
            document.createElement("span");


        confetti.classList.add("confetti");


        confetti.textContent =

            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =

            Math.random() * 100 + "%";


        confetti.style.fontSize =

            Math.random() * 20 + 12 + "px";


        confetti.style.animationDuration =

            Math.random() * 3 + 3 + "s";


        confetti.style.animationDelay =

            Math.random() * 1 + "s";


        finalScreen.appendChild(
            confetti
        );


        setTimeout(() => {

            confetti.remove();

        }, 8000);

    }

}


/* =========================================
   CONFETTI STYLES
========================================= */

const confettiStyle =
    document.createElement("style");


confettiStyle.textContent = `

    .confetti {

        position: absolute;

        top: -60px;

        z-index: 50;

        pointer-events: none;

        animation:
            confettiFall
            linear
            forwards;

    }


    @keyframes confettiFall {

        0% {

            transform:
                translateY(-60px)
                rotate(0deg);

            opacity: 1;

        }


        100% {

            transform:
                translateY(110vh)
                rotate(720deg);

            opacity: 0;

        }

    }

`;


document.head.appendChild(
    confettiStyle
);


/* =========================================
   CONSOLE MESSAGE 😭
========================================= */

console.log(
    "%c🎂 HAPPY BIRTHDAY RUPESH SIR! 🎂",
    "font-size:20px; font-weight:bold; color:#f07b32;"
);

console.log(
    "Made by Ali ❤️"
);