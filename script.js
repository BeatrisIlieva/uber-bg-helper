const phrases = [
    {
        Translation: 'Добър ден',
        Bulgarian: 'Гууд Афтърнуун',
        English: 'Good Afternoon'
    }
];


function clickHandler(index) {
    const audio = document.getElementById(index);
    audio.play();
}
const olElement = document.querySelector('ol');

phrases.forEach((phrase, index) => {
    const translationSpanElement = document.createElement('span');
    translationSpanElement.textContent = phrase.Translation;

    const bulgarianSpanElement = document.createElement('span');
    bulgarianSpanElement.textContent = phrase.Bulgarian;

    const englishSpanElement = document.createElement('span');
    englishSpanElement.textContent = phrase.English;

    const audioElement = document.createElement('audio');
    audioElement.setAttribute('id', index);
    audioElement.setAttribute('src', `audio/${index + 1}.m4a`);

    const playButtonElement = document.createElement('button');
    playButtonElement.textContent = 'Play';
    playButtonElement.addEventListener('click', () =>
        clickHandler(index)
    );

    const liElement = document.createElement('li');
    liElement.append(
        translationSpanElement,
        bulgarianSpanElement,
        englishSpanElement,
        audioElement,
        playButtonElement
    );

    olElement.append(liElement);
});
