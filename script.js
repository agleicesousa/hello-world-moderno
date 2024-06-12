const greetings = {
    pt: 'Olá, Mundo!',
    en: 'Hello, World!',
    es: 'Hola, Mundo!',
    fr: 'Bonjour, Monde!',
    it: 'Ciao, Mondo!'
};

let selectedLanguage = 'pt';

document.getElementById('personalizeButton').addEventListener('click', personalizeGreeting);
document.getElementById('languageSelect').addEventListener('change', changeLanguage);
document.getElementById('themeToggleButton').addEventListener('click', toggleTheme);

window.addEventListener('load', () => {
    loadPreferences();
});

function changeLanguage() {
    selectedLanguage = document.getElementById('languageSelect').value;
    localStorage.setItem('language', selectedLanguage);
    updateGreeting(greetings[selectedLanguage]);
}

function personalizeGreeting() {
    const name = document.getElementById('nameInput').value.trim();
    const greeting = name ? `${getGreetingPrefix(selectedLanguage)}, ${name}!` : greetings[selectedLanguage];
    updateGreeting(greeting);
    localStorage.setItem('greeting', greeting);
}

function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    document.getElementById('themeToggleButton').innerText = isDarkTheme ? 'Modo Claro' : 'Modo Noturno';
}

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeToggleButton').innerText = 'Modo Claro';
    }

    const savedGreeting = localStorage.getItem('greeting');
    if (savedGreeting) {
        updateGreeting(savedGreeting);
    }

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        selectedLanguage = savedLanguage;
        document.getElementById('languageSelect').value = savedLanguage;
    }
}

function updateGreeting(text) {
    document.getElementById('greeting').innerText = text;
}

function getGreetingPrefix(language) {
    switch (language) {
        case 'en': return 'Hello';
        case 'es': return 'Hola';
        case 'fr': return 'Bonjour';
        case 'it': return 'Ciao';
        default: return 'Olá';
    }
            }
