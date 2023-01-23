import { fetchCountries } from "./fetchCountries.js";
import './css/styles.css';
import debounce from "lodash.debounce";

const DEBOUNCE_DELAY = 300;
const list = document.querySelector('.country-list')
const input = document.querySelector('#search-box');
input.addEventListener('input', debounce(onLoad, DEBOUNCE_DELAY));
console.log()



function onLoad(eve) {
    fetchCountries(eve.target.value)
        .then(data => {
            if (data.length > 1) {
        list.innerHTML = createMarkup(data)
    } else {
        list.innerHTML = createMarkupCountry(data)
    }
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
        `<img src="${svg}" width="50" alt="flag">
        <h1>${official}</h1>
        <p>Capital: ${capital}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages)}</p>`
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
            `<li class=""js-list>
        <div class="js-box">
        <img src="${svg}" width="30" alt="flag">
        <p>${official}</p>
        </div>
        </li>`
        ).join('')
    }

