import { QuantityPos } from './main.js'

import { filter } from './filter.js'

import { selectQuantity } from './main.js'

import { apiTwo } from './main.js'

const inp = document.getElementById('inp');
let apiOne = 'search/shows?q=';

export function getData() {
    const promise = fetch(`http://api.tvmaze.com/${inp.value ? apiOne + inp.value : apiTwo}`);
    promise
        .then((response) => {
            if (response.status !== 200) {
                console.log('Looks like there was a problem');
                console.log(`Status Code: ${response.status}`);
                return;
            }
            return response.json();
        })

        .then((data) => {
            QuantityPos();
            let show
            if (inp.value === '') {
                if(selectQuantity.value === 'Кол-во фильмов'){
                    cards.innerHTML = '';
                    show = data.slice(0,10);
                }else{
                    cards.innerHTML = '';
                    show = data.slice(0,selectQuantity.value);
                }
            filter(show)
            }else{
            const newArrShow = data.map(({ show }) => show)
            if(selectQuantity.value === 'Кол-во фильмов'){
                cards.innerHTML = '';
                show = newArrShow.slice(0,10);
            }else{
                cards.innerHTML = '';
                show = newArrShow.slice(0,selectQuantity.value);
            }
            filter(show)
        }
        })

    .catch(function (err) {
        alert(err.message);
    });
}