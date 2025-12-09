// --- CONFIGURAZIONE LINGUE E TESTI ---
const texts = {
    it: {
        // --- SITO PRINCIPALE ---
        mainTitle: "🕹️ Sala Giochi Online",
        subTitle: "La tua collezione di giochi browser-based",
        sectionSingle: "Giochi Single Player",
        
        // Card Testi
        game1Title: "T-Rex Run",
        game1Desc: "Il classico gioco del dinosauro. Salta gli ostacoli!",
        game2Title: "Space Shooter",
        game2Desc: "Difendi la galassia dall'invasione aliena.",
        game3Title: "Memory",
        game3Desc: "Metti alla prova la tua memoria trovando le coppie.",
        game4Title: "Avventura Grafica",
        game4Desc: "Un mistero da risolvere.",
        
        // Bottoni
        playBtn: "🎮 Gioca Ora",
        comingSoon: "🚧 In Arrivo",
        backHome: "🏠 Torna alla Home",
        footerText: "&copy; 2025 Sala Giochi Online. Buon divertimento!",

        // --- AVVENTURA GRAFICA ---
        chooseChar: "Scegli il tuo Personaggio",
        enterName: "Inserisci il tuo Nome",
        startAdv: "Inizia l'Avventura",
        roomName: "Salotto",
        roomKitchen: "Cucina",
        placeholderName: "Il tuo nome...",
        
        // Dialoghi Avventura
        lockedDoor: "È chiusa a chiave. Serve un meccanismo.",
        openDoor: "La porta è aperta!",
        bookshelfHint: "Mmh, questo libro sembra fuori posto... Click!",
        foundSwitch: "Hai sbloccato la porta!",
        sofaDesc: "Un divano molto comodo. Niente qui.",
        tableDesc: "Solo briciole sul tavolo.",
        interactParams: "Premi SPAZIO per interagire",
        chestLocked: "Un forziere chiuso da un lucchetto digitale.",

        // --- TESTI IN-GAME (Generici) ---
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
        
        // Cards
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
        roomKitchen: "Kitchen",
        placeholderName: "Your name...",

        // Adventure Dialogs
        lockedDoor: "It's locked. Needs a mechanism.",
        openDoor: "The door is open!",
        bookshelfHint: "Hmm, this book looks odd... Click!",
        foundSwitch: "You unlocked the door!",
        sofaDesc: "A very comfy sofa. Nothing here.",
        tableDesc: "Just crumbs on the table.",
        interactParams: "Press SPACE to interact",
        chestLocked: "A chest locked by a digital pad.",

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
        
        // Cards
        game1Title: "T-Rex Run",
        game1Desc: "Klasická hra s dinosaurom. Preskakuj prekážky!",
        game2Title: "Space Shooter",
        game2Desc: "Obráň galaxiu pred mimozemskou inváziou.",
        game3Title: "Pexeso",
        game3Desc: "Otestuj svoju pamäť nájdením všetkých párov.",
        game4Title: "Grafická Adventúra",
        game4Desc: "Záhada na vyriešenie.",
        
        // Buttons
        playBtn: "🎮 Hrať teraz",
        comingSoon: "🚧 Čoskoro",
        backHome: "🏠 Späť domov",
        footerText: "&copy; 2025 Online Arkáda. Príjemnú zábavu!",

        // --- GRAFICKÁ ADVENTÚRA ---
        chooseChar: "Vyber si postavu",
        enterName: "Zadaj svoje meno",
        startAdv: "Začať dobrodružstvo",
        roomName: "Obývačka",
        roomKitchen: "Kuchyňa",
        placeholderName: "Tvoje meno...",

        // Adventure Dialogs
        lockedDoor: "Je zamknuté. Potrebuješ mechanizmus.",
        openDoor: "Dvere sú otvorené!",
        bookshelfHint: "Hmm, táto kniha vyzerá zvláštne... Klik!",
        foundSwitch: "Odomkol si dvere!",
        sofaDesc: "Veľmi pohodlná pohovka. Nič tu nie je.",
        tableDesc: "Iba omrvinky na stole.",
        interactParams: "Stlač MEDZERNÍK pre interakciu",
        chestLocked: "Truhlica zamknutá digitálnym zámkom.",

        // --- IN-GAME TEXTS ---
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

// Funzione helper sicura per ottenere testo
function t(key) {
    if (texts[currentLang] && texts[currentLang][key]) {
        return texts[currentLang][key];
    }
    return key; // Se manca la traduzione, restituisce la chiave stessa per non rompere il gioco
}

// Funzione principale per aggiornare la pagina
function updatePageLanguage() {
    // 1. Aggiorna testi HTML standard (data-i18n)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (texts[currentLang] && texts[currentLang][key]) {
            element.innerHTML = texts[currentLang][key];
        }
    });
    
    // 2. Aggiorna placeholder (SOLO se l'elemento esiste nella pagina)
    // Questo era probabilmente l'errore: cercava l'input anche dove non c'era
    const inputName = document.getElementById('playerNameInput');
    if (inputName) {
         inputName.placeholder = t('placeholderName');
    }

    // 3. Imposta lingua al documento
    document.documentElement.lang = currentLang;
}

// Funzione chiamata dai bottoni
function setLanguage(lang) {
    console.log("Cambio lingua in:", lang); // Debug in console
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    
    updatePageLanguage();
    
    // Se siamo in un gioco con Canvas, ricarichiamo per ridisegnare
    if (window.isGamePage) {
        location.reload(); 
    }
}

// Avvio
document.addEventListener('DOMContentLoaded', updatePageLanguage);
