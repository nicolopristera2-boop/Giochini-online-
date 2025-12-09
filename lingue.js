// --- CONFIGURAZIONE LINGUE E TESTI ---
const texts = {
    it: {
        // --- SITO PRINCIPALE ---
        mainTitle: "🕹️ Sala Giochi Online",
        subTitle: "La tua collezione di giochi browser-based",
        sectionSingle: "Giochi Single Player",
        
        // Card Testi (Devono corrispondere ai data-i18n nell'index.html)
        game1Title: "T-Rex Run",
        game1Desc: "Il classico gioco del dinosauro. Salta gli ostacoli!",
        game2Title: "Space Shooter",
        game2Desc: "Difendi la galassia dall'invasione aliena.",
        game3Title: "Memory",
        game3Desc: "Metti alla prova la tua memoria trovando le coppie.",
        game4Title: "Avventura Grafica",
        game4Desc: "Un mistero da risolvere.",
        
        // Bottoni Sito
        playBtn: "🎮 Gioca Ora",
        comingSoon: "🚧 In Arrivo",
        backHome: "🏠 Torna alla Home",
        footerText: "&copy; 2025 Sala Giochi Online. Buon divertimento!",

        // --- AVVENTURA GRAFICA (Nuovi) ---
        chooseChar: "Scegli il tuo Personaggio",
        enterName: "Inserisci il tuo Nome",
        startAdv: "Inizia l'Avventura",
        roomName: "Salotto",
        placeholderName: "Il tuo nome...",
        welcome: "Benvenuto,",

        // --- TESTI DEI GIOCHI (In-Game) ---
        score: "Punti: ",
        lives: "Vite: ",
        moves: "Mosse: ",
        time: "Tempo: ",
        gameOver: "GAME OVER",
        youWin: "HAI VINTO!",
        startMsg: "Premi SPAZIO o Clicca per Iniziare",
        restartMsg: "Clicca per Rigiocare",
        level: "Livello: "
    },
    en: {
        // --- MAIN SITE ---
        mainTitle: "🕹️ Online Arcade",
        subTitle: "Your collection of browser-based games",
        sectionSingle: "Single Player Games",
        
        // Card Texts
        game1Title: "T-Rex Run",
        game1Desc: "The classic dinosaur game. Jump obstacles!",
        game2Title: "Space Shooter",
        game2Desc: "Defend the galaxy from alien invasion.",
        game3Title: "Memory",
        game3Desc: "Test your memory by finding matching pairs.",
        game4Title: "Graphic Adventure",
        game4Desc: "A mystery to solve.",
        
        // Buttons
        playBtn: "🎮 Play Now",
        comingSoon: "🚧 Coming Soon",
        backHome: "🏠 Back to Home",
        footerText: "&copy; 2025 Online Arcade. Have fun!",

        // --- GRAPHIC ADVENTURE ---
        chooseChar: "Choose your Character",
        enterName: "Enter your Name",
        startAdv: "Start Adventure",
        roomName: "Living Room",
        placeholderName: "Your name...",
        welcome: "Welcome,",

        // --- IN-GAME TEXTS ---
        score: "Score: ",
        lives: "Lives: ",
        moves: "Moves: ",
        time: "Time: ",
        gameOver: "GAME OVER",
        youWin: "YOU WIN!",
        startMsg: "Press SPACE or Click to Start",
        restartMsg: "Click to Play Again",
        level: "Level: "
    },
    sk: {
        // --- HLAVNÁ STRÁNKA ---
        mainTitle: "🕹️ Online Arkáda",
        subTitle: "Tvoja zbierka prehliadačových hier",
        sectionSingle: "Hry pre jedného hráča",
        
        // Texty Kariet
        game1Title: "T-Rex Run",
        game1Desc: "Klasická hra s dinosaurom. Preskakuj prekážky!",
        game2Title: "Space Shooter",
        game2Desc: "Obráň galaxiu pred mimozemskou inváziou.",
        game3Title: "Pexeso",
        game3Desc: "Otestuj svoju pamäť nájdením všetkých párov.",
        game4Title: "Grafická Adventúra",
        game4Desc: "Záhada na vyriešenie.",
        
        // Tlačidlá
        playBtn: "🎮 Hrať teraz",
        comingSoon: "🚧 Čoskoro",
        backHome: "🏠 Späť domov",
        footerText: "&copy; 2025 Online Arkáda. Príjemnú zábavu!",

        // --- GRAFICKÁ ADVENTÚRA ---
        chooseChar: "Vyber si postavu",
        enterName: "Zadaj svoje meno",
        startAdv: "Začať dobrodružstvo",
        roomName: "Obývačka",
        placeholderName: "Tvoje meno...",
        welcome: "Vitaj,",

        // --- TEXTY V HRE ---
        score: "Skóre: ",
        lives: "Životy: ",
        moves: "Ťahy: ",
        time: "Čas: ",
        gameOver: "KONIEC HRY",
        youWin: "VYHRAL SI!",
        startMsg: "Stlač MEDZERNÍK alebo Klikni pre Štart",
        restartMsg: "Klikni pre novú hru",
        level: "Úroveň: "
    }
};

// --- LOGICA DI GESTIONE ---
let currentLang = localStorage.getItem('selectedLang') || 'it';

// Funzione helper per ottenere il testo (usata nei canvas)
function t(key) {
    return texts[currentLang][key] || key;
}

// Funzione per aggiornare l'HTML (usata nel DOM)
function updatePageLanguage() {
    // Aggiorna testi HTML
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (texts[currentLang][key]) {
            element.innerHTML = texts[currentLang][key];
        }
    });
    
    // Aggiorna i placeholder degli input (caso speciale per l'avventura)
    const inputs = document.querySelectorAll('input[placeholder]');
    inputs.forEach(input => {
        // Se siamo nella pagina avventura e c'è l'input nome
        if (input.id === 'playerNameInput') {
             input.placeholder = t('placeholderName');
        }
    });

    // Aggiorna attributo lang
    document.documentElement.lang = currentLang;
}

// Funzione cambio lingua (bottone)
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    updatePageLanguage();
    // Se siamo in un gioco Canvas, ricarichiamo la pagina per ridisegnare i testi
    if (window.isGamePage) {
        location.reload(); 
    }
}

// Avvio automatico al caricamento
document.addEventListener('DOMContentLoaded', updatePageLanguage);
