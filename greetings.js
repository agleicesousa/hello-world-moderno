import { updateGreetingText } from 'script.js';

const greetings = {
    pt: 'Olá, Mundo!',
    en: 'Hello, World!',
    es: 'Hola, Mundo!',
    fr: 'Bonjour, Monde!',
    it: 'Ciao, Mondo!'
};

export function setGreetingLanguage() {
    const language = document.getElementById('languageSelect').value;
    const greeting = greetings[language];
    updateGreetingText(greeting);
    localStorage.setItem('greeting', greeting);
}

export function personalizeGreeting() {
    const name = document.getElementById('nameInput').value.trim();
    const greeting = name ? `Olá, ${name}!` : greetings['pt'];
    updateGreetingText(greeting);
    localStorage.setItem('greeting', greeting);
}
