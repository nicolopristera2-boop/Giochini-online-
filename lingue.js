// --- CONFIGURAZIONE LINGUE E TESTI ---
const texts = {
    it: {
        // --- SITO PRINCIPALE ---
        mainTitle: "🕹️ Sala Giochi Online",
        subTitle: "La tua collezione di giochi browser-based",
        sectionSingle: "Giochi Single Player",
        
        // Card Testi
        game1Title: "T-Rex Run", game1Desc: "Salta gli ostacoli!",
        game2Title: "Space Shooter", game2Desc: "Difendi la galassia.",
        game3Title: "Memory", game3Desc: "Trova le coppie.",
        game4Title: "Avventura Grafica", game4Desc: "Risolvi il mistero della casa.",
        
        // Bottoni Sito
        playBtn: "🎮 Gioca Ora",
        comingSoon: "🚧 In Arrivo",
        backHome: "🏠 Torna alla Home",
        footerText: "&copy; 2025 Sala Giochi Online. Buon divertimento!",

        // --- AVVENTURA GRAFICA ---
        chooseChar: "Scegli il tuo Personaggio",
        enterName: "Inserisci il tuo Nome",
        startAdv: "Inizia l'Avventura",
        placeholderName: "Il tuo nome...",
        
        // Nomi Stanze
        roomLiving: "Salotto",
        roomKitchen: "Cucina",
        roomGarden: "Giardino",
        roomLab: "Laboratorio Segreto",
        roomAttic: "Soffitta",

        // Dialoghi e Oggetti
        interactParams: "Premi SPAZIO per interagire",
        lockedDoor: "Chiusa a chiave. Serve una chiave specifica.",
        lockedElec: "Senza corrente la porta non si apre.",
        
        // Enigmi
        bookshelfHint: "Mmh, questo libro sembra fuori posto... Click! Hai sentito un rumore.",
        fridgeDesc: "Brr! C'è un post-it sul latte: 'Codice: 1234'.",
        chestLocked: "Serve un codice.",
        chestOpen: "Codice 1234 accettato! Hai trovato la CHIAVE ARRUGGINITA (Giardino).",
        shovelPick: "Hai preso la PALA.",
        dirtDesc: "Terra smossa... serve qualcosa per scavare.",
        dirtDig: "Hai scavato e trovato una TESSERA MAGNETICA (Lab)!",
        fountainDesc: "Acqua fresca. Rilassante.",
        generatorOff: "Il generatore è spento. Premi pulsante...",
        generatorOn: "VROOOM! Corrente ripristinata!",
        pcDesc: "Il computer ora è acceso. Dice 'Accesso Soffitta: GARANTITO'.",
        finalChest: "COMPLIMENTI! Hai trovato il Tesoro degli Antichi Sviluppatori!",
        itemFound: "Oggetto ottenuto!",
        nothing: "Niente di interessante.",
        sofaDesc: "Un divano molto comodo. Niente qui.",
        tableDesc: "Solo briciole sul tavolo.",

        // --- TESTI IN-GAME (Generici per altri giochi) ---
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
        mainTitle: "🕹️ Online Arcade", subTitle: "Browser games collection",
        sectionSingle: "Single Player", 
        game1Title: "T-Rex Run", game1Desc: "Jump!",
        game2Title: "Space Shooter", game2Desc: "Shoot aliens.",
        game3Title: "Memory", game3Desc: "Find pairs.",
        game4Title: "Graphic Adventure", game4Desc: "Solve the mystery.",
        playBtn: "🎮 Play Now", comingSoon: "🚧 Soon", backHome: "🏠 Home",
        footerText: "&copy; 2025 Online Arcade.",

        // --- ADVENTURE ---
        chooseChar: "Choose Character", enterName: "Enter Name", startAdv: "Start",
        placeholderName: "Your Name...", 
        roomLiving: "Living Room", roomKitchen: "Kitchen",
        roomGarden: "Garden", roomLab: "Secret Lab", roomAttic: "Attic",
        interactParams: "Press SPACE to interact", lockedDoor: "Locked. Need a key.",
        lockedElec: "No power. Door is stuck.", bookshelfHint: "Odd book... Click!",
        fridgeDesc: "A note on the milk says: 'Code: 1234'.", chestLocked: "Needs a code.",
        chestOpen: "Code 1234! Found RUSTY KEY (Garden).", shovelPick: "You got the SHOVEL.",
        dirtDesc: "Loose dirt... need to dig.", dirtDig: "You dug up a KEYCARD (Lab)!",
        fountainDesc: "Nice water.", generatorOff: "Generator is off. Pressing button...",
        generatorOn: "VROOOM! Power ON!", pcDesc: "PC says: 'Attic Access: GRANTED'.",
        finalChest: "CONGRATS! You found the Treasure!", itemFound: "Item get!", nothing: "Nothing here.",
        sofaDesc: "A very comfy sofa. Nothing here.", tableDesc: "Just crumbs on the table.",

        // --- IN-GAME ---
        score: "Score: ", lives: "Lives: ", moves: "Moves: ", time: "Time: ",
        gameOver: "GAME OVER", youWin: "YOU WIN!",
        startMsg: "Press SPACE or Click to Start", restartMsg: "Click to Play Again", level: "Level: "
    },
    sk: {
        // --- HLAVNÁ STRÁNKA ---
        mainTitle: "🕹️ Online Arkáda", subTitle: "Zbierka hier",
        sectionSingle: "Hry pre jedného", 
        game1Title: "T-Rex Run", game1Desc: "Skáč!",
        game2Title: "Space Shooter", game2Desc: "Strieľaj.",
        game3Title: "Pexeso", game3Desc: "Nájdi páry.",
        game4Title: "Grafická Adventúra", game4Desc: "Vyrieš záhadu.",
        playBtn: "🎮 Hrať", comingSoon: "🚧 Čoskoro", backHome: "🏠 Domov",
        footerText: "&copy; 2025 Online Arkáda.",

        // --- ADVENTÚRA ---
        chooseChar: "Vyber postavu", enterName: "Zadaj meno", startAdv: "Štart",
        placeholderName: "Tvoje meno...", 
        roomLiving: "Obývačka", roomKitchen: "Kuchyňa",
        roomGarden: "Záhrada", roomLab: "Laboratórium", roomAttic: "Podkrovie",
        interactParams: "Stlač MEDZERNÍK", lockedDoor: "Zamknuté.",
        lockedElec: "Bez elektriny.", bookshelfHint: "Zvláštna kniha... Klik!",
        fridgeDesc: "Lístok hovorí: 'Kód: 1234'.", chestLocked: "Chce to kód.",
        chestOpen: "Máš HRDZAVÝ KĽÚČ (Záhrada).", shovelPick: "Máš LOPATU.",
        dirtDesc: "Hlina... treba kopať.", dirtDig: "Vykopal si KARTU (Lab)!",
        fountainDesc: "Pekná voda.", generatorOff: "Generátor vypnutý. Zapínam...",
        generatorOn: "VROOOM! Elektrina ide!", pcDesc: "PC píše: 'Podkrovie: OTVORENÉ'.",
        finalChest: "GRATULUJEM! Našiel si poklad!", itemFound: "Máš predmet!", nothing: "Nič tu nie je.",
        sofaDesc: "Veľmi pohodlná pohovka. Nič tu nie je.", tableDesc: "Iba omrvinky na stole.",

        // --- IN-GAME ---
        score: "Skóre: ", lives: "Životy: ", moves: "Ťahy: ", time: "Čas: ",
        gameOver: "KONIEC HRY", youWin: "VYHRAL SI!",
        startMsg: "Stlač MEDZERNÍK alebo Klikni pre Štart", restartMsg: "Klikni pre novú hru", level: "Úroveň: "
    }
};

let currentLang = localStorage.getItem('selectedLang') || 'it';

function t(key) {
    if (texts[currentLang] && texts[currentLang][key]) return texts[currentLang][key];
    return key;
}

function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[currentLang][key]) el.innerHTML = texts[currentLang][key];
    });
    const input = document.getElementById('playerNameInput');
    if(input) input.placeholder = t('placeholderName');
    document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('selectedLang', lang);
    updatePageLanguage();
    if (window.isGamePage) location.reload();
}

document.addEventListener('DOMContentLoaded', updatePageLanguage);
