import { createCard } from './card.js'

const selectCountry = document.getElementById('country-sort');
const selectGenre = document.getElementById('genre-sort');
export function filter(show){
    show.forEach(elem => {
        const filterShow = elem.genres.some(item => item === selectGenre.value);
        if(filterShow || selectGenre.value === 'Жанр'){
            if(elem.language === selectCountry.value || selectCountry.value === 'Язык'){
                createCard(elem);
            }
        }
    });
}