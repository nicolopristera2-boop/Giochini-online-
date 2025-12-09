const texts = {
    it: {
        // --- NUOVI TESTI AVVENTURA ---
        chooseChar: "Scegli il tuo Personaggio",
        enterName: "Inserisci il tuo Nome",
        startAdv: "Inizia l'Avventura",
        roomName: "Salotto",
        placeholderName: "Il tuo nome...",
        welcome: "Benvenuto,"
    },
    en: {
        // --- NEW ADVENTURE TEXTS ---
        chooseChar: "Choose your Character",
        enterName: "Enter your Name",
        startAdv: "Start Adventure",
        roomName: "Living Room",
        placeholderName: "Your name...",
        welcome: "Welcome,"
    },
    sk: {
        // --- NOVÉ TEXTY ADVENTÚRY ---
        chooseChar: "Vyber si postavu",
        enterName: "Zadaj svoje meno",
        startAdv: "Začať dobrodružstvo",
        roomName: "Obývačka",
        placeholderName: "Tvoje meno...",
        welcome: "Vitaj,"
    },
        it: {
        // Sito Principale
        mainTitle: "🕹️ Sala Giochi Online",
        subTitle: "La tua collezione di giochi browser-based",
        sectionSingle: "Giochi Single Player",
        playBtn: "🎮 Gioca Ora",
        comingSoon: "🚧 In Arrivo",
        footerText: "&copy; 2025 Sala Giochi Online. Buon divertimento!",
        
        // Descrizioni Card
        trexTitle: "T-Rex Run",
        trexDesc: "Il classico gioco del dinosauro. Salta gli ostacoli!",
        spaceTitle: "Space Shooter",
        spaceDesc: "Difendi la galassia dall'invasione aliena.",
        memoryTitle: "Memory",
        memoryDesc: "Trova tutte le coppie.",
        advTitle: "Avventura Grafica",
        advDesc: "Un mistero da risolvere (Work in Progress).",

        // --- TESTI INTERNI AI GIOCHI (USATI NEL CODICE JS DEI GIOCHI) ---
        score: "Punteggio: ",
        gameOver: "GAME OVER",
        restart: "Premi per ricominciare",
        level: "Livello: ",
        start: "Clicca per Iniziare"
    },
    en: {
        // Main Site
        mainTitle: "🕹️ Online Arcade",
        subTitle: "Your collection of browser-based games",
        sectionSingle: "Single Player Games",
        playBtn: "🎮 Play Now",
        comingSoon: "🚧 Coming Soon",
        footerText: "&copy; 2025 Online Arcade. Have fun!",
        
        // Cards
        trexTitle: "T-Rex Run",
        trexDesc: "The classic dinosaur game. Jump obstacles!",
        spaceTitle: "Space Shooter",
        spaceDesc: "Defend the galaxy from aliens.",
        memoryTitle: "Memory",
        memoryDesc: "Find all matching pairs.",
        advTitle: "Graphic Adventure",
        advDesc: "A mystery to solve (Work in Progress).",

        // --- IN-GAME TEXTS ---
        score: "Score: ",
        gameOver: "GAME OVER",
        restart: "Press to restart",
        level: "Level: ",
        start: "Click to Start"
    },
    sk: {
        // Main Site
        mainTitle: "🕹️ Online Arkáda",
        subTitle: "Tvoja zbierka prehliadačových hier",
        sectionSingle: "Hry pre jedného hráča",
        playBtn: "🎮 Hrať teraz",
        comingSoon: "🚧 Čoskoro",
        footerText: "&copy; 2025 Online Arkáda. Príjemnú zábavu!",
        
        // Cards
        trexTitle: "T-Rex Run",
        trexDesc: "Klasická hra s dinosaurom. Preskakuj prekážky!",
        spaceTitle: "Space Shooter",
        spaceDesc: "Obráň galaxiu pred votrelcami.",
        memoryTitle: "Pexeso",
        memoryDesc: "Nájdi všetky páry.",
        advTitle: "Grafická Adventúra",
        advDesc: "Záhada na vyriešenie (Work in Progress).",

        // --- IN-GAME TEXTS ---
        score: "Skóre: ",
        gameOver: "KONIEC HRY",
        restart: "Stlač pre reštart",
        level: "Úroveň: ",
        start: "Klikni pre štart"
    }
};

// --- LOGICA DI GESTIONE ---
// 1. Controlla se c'è una lingua salvata, altrimenti usa Italiano
let currentLang = localStorage.getItem('selectedLang') || 'it';

// Funzione per aggiornare la pagina HTML
function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (texts[currentLang][key]) {
            element.innerHTML = texts[currentLang][key];
        }
    });
}

// Funzione per cambiare lingua (chiamata dai bottoni)
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLang', lang); // Salva la scelta nella memoria del browser
    updatePageLanguage();
    // Se siamo in un gioco, potrebbe servire ricaricare per aggiornare il canvas
    if(window.isGamePage) {
        location.reload(); 
    }
}

// Funzione helper per ottenere testo dentro il codice JS dei giochi
function t(key) {
    return texts[currentLang][key] || key;
}

// Avvia la traduzione al caricamento
document.addEventListener('DOMContentLoaded', updatePageLanguage);
