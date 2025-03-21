import { phrases } from './phrases.js';

const tbodyElement = document.querySelector('tbody');

phrases.forEach((phrase, index) => {
    const countTdElement = document.createElement('td');
    countTdElement.textContent = `${index + 1}.`;

    const translationTdElement = document.createElement('td');
    translationTdElement.textContent = phrase.Translation;

    const bulgarianTdElement = document.createElement('td');
    bulgarianTdElement.textContent = phrase.Bulgarian;

    const englishTdElement = document.createElement('td');
    englishTdElement.textContent = phrase.English;

    const audioElement = document.createElement('audio');
    audioElement.setAttribute('id', index);
    audioElement.setAttribute('src', `audio/${index + 1}.m4a`);

    const playButtonElement = document.createElement('button');
    playButtonElement.textContent = 'Play';
    playButtonElement.addEventListener('click', () =>
        clickHandler(index)
    );

    const buttonTdElement = document.createElement('td');
    buttonTdElement.append(playButtonElement);

    const trElement = document.createElement('tr');

    trElement.append(
        countTdElement,
        translationTdElement,
        bulgarianTdElement,
        englishTdElement,
        audioElement,
        buttonTdElement
    );

    tbodyElement.append(trElement);
});

function clickHandler(index) {
    const audio = document.getElementById(index);
    audio.play();
}
