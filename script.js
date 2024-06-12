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
}
