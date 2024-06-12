import { personalizeGreeting, setGreetingLanguage } from './modules/greetings.js';

document.getElementById('personalizeButton').addEventListener('click', personalizeGreeting);
document.getElementById('languageSelect').addEventListener('change', setGreetingLanguage);
document.getElementById('themeToggleButton').addEventListener('click', toggleTheme);

window.addEventListener('load', () => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeButtonText('Modo Claro');
    } else {
        updateThemeButtonText('Modo Noturno');
    }

    const savedGreeting = localStorage.getItem('greeting');
    if (savedGreeting) {
        updateGreeting(savedGreeting);
    }
});

function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    updateThemeButtonText(isDarkTheme ? 'Modo Claro' : 'Modo Noturno');
}

function updateThemeButtonText(text) {
    document.getElementById('themeToggleButton').innerText = text;
}

function updateGreeting(text) {
    const greetingElement = document.getElementById('greeting');
    greetingElement.innerText = text;
}

export function updateGreetingText(text) {
    updateGreeting(text);
}