import cardTemplate from './templates/card.hbs';
import cards from './js/menu.json';
import './styles.css';

console.log(cardTemplate);

const cardsMarkup = createCardsMarkup(cards);
const menu = document.querySelector('.js-menu');
const checkbox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

checkTheme();

function createCardsMarkup(cards) {
    return cards.map(cardTemplate);
}

menu.insertAdjacentHTML("beforeend", cardsMarkup.join(''));
checkbox.addEventListener('change', onCheckboxChange);

function onCheckboxChange(event) {
    console.log(event.currentTarget.checked);
    if (event.currentTarget.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        console.log(localStorage);
        localStorage.setItem('chosen-theme', Theme.DARK);
    }
    else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        console.log(localStorage);
        localStorage.setItem('chosen-theme', Theme.LIGHT);
    }
}

function checkTheme() {
    console.log(localStorage.getItem('chosen-theme'));
    if (localStorage.getItem('chosen-theme') === Theme.DARK) {
        body.classList.remove(Theme.LIGHT); 
        body.classList.add(Theme.DARK);
        checkbox.checked = true;
    }
    else{
        body.classList.remove(Theme.DARK); 
        body.classList.add(Theme.LIGHT);
        checkbox.checked = false;
    }
}