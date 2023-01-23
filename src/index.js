import { fetchCountries } from "./fetchCountries.js";
import './css/styles.css';
import debounce from "lodash.debounce";
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const list = document.querySelector('.country-list')
const input = document.querySelector('#search-box');
const remo = document.querySelector('.js-remove')
input.addEventListener('input', debounce(onLoad, DEBOUNCE_DELAY));
console.log()



function onLoad(eve) {
    if (eve.target.value.trim() === "") {
        list.innerHTML = "";
        return
    };
    
    fetchCountries(eve.target.value.trim())
        .then(data => {
            if (data.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
                return
            };
            if (data.length > 1) {
        list.innerHTML = createMarkup(data)
    } else {
        list.innerHTML = createMarkupCountry(data)
            };
        })
};



function createMarkupCountry(arr) {
    return arr.map(({
            name: {
                official
            },
            flags: {
                svg
            },
        capital,
        population,
        languages
    }) =>
        
        `<div class="js-remove">
        <img src="${svg}" width="50" alt="flag">
        <h1>${official}</h1>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
                <p>Languages: ${Object.values(languages)}</p>
        </div>`
    ).join('')
}


function createMarkup(arr) {
        return arr.map(({
            name: {
                official
            },
            flags: {
                svg
            }
        }) =>
            `<div class="js-remove">
            <li class=""js-list>
        <div class="js-box">
        <img src="${svg}" width="30" alt="flag">
        <p>${official}</p>
        </div>
        </li>
        </div>`
        ).join('')
    }

