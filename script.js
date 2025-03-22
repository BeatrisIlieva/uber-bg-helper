import { phrases, dictionary } from './phrases.js';

const tbodyElement = document.querySelector('tbody');

phrases.forEach((phrase, index) => {
    const countTdElement = document.createElement('td');
    countTdElement.textContent = `${index + 1}.`;

    const translationTdElement = document.createElement('td');
    translationTdElement.textContent = phrase.Translation;

    const bulgarianTdElement = document.createElement('td');
    bulgarianTdElement.textContent = phrase.Bulgarian;

    const fragment = document.createDocumentFragment();

    phrase.English.split(' ').forEach(word => {
        const spanElement = document.createElement('span');
        spanElement.addEventListener('click', e =>
            showTranslationHandler(e, word)
        );
        spanElement.textContent = word;

        fragment.append(spanElement);
    });

    const englishTdElement = document.createElement('td');
    englishTdElement.append(fragment);

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

function showTranslationHandler(e, word) {
    const previousMarkedElement = document.querySelector('.marked');

    if (previousMarkedElement) {
        previousMarkedElement.classList.remove('marked');
        document.querySelector('.translation').remove();
    }

    e.target.classList.add('marked');
    word = word.replace('?', '');
    word = word.replace('!', '');
    word = word.replace('.', '');
    word = word.replace(',', '');

    const translation = dictionary[word.toLowerCase()];

    const translationSpanElement = document.createElement('span');
    translationSpanElement.classList.add('translation');
    translationSpanElement.addEventListener('click', unMarkHandler);
    translationSpanElement.textContent = translation;

    const tdElement = e.target.closest('td');
    tdElement.append(translationSpanElement);

    console.log(translation);
}

function unMarkHandler() {
    const previousMarkedElement = document.querySelector('.marked');

    previousMarkedElement.classList.remove('marked');
    document.querySelector('.translation').remove();
}
