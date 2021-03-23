import { getData } from './fetch.js'

const btn = document.getElementById('btn');
const cards = document.getElementById('cards');
const cardsFavourite = document.getElementById('cardsFavourite');
export const selectQuantity = document.getElementById('quantity-films');
export let apiTwo = 'shows?page=1';
let pageCount = 1;
const buttonPagin = document.getElementById('button-pagin');
let numSpan = document.getElementById('numSpan');
const numSpanPages = document.getElementById('num-span-pages');

export function setFavourite(elem,button) {
    button.addEventListener('click', function () {
    button.style.background = 'red';
        if (elem.image || elem.image.medium) {
            localStorage.setItem(elem.id, elem.image.original);
        } else {
            localStorage.setItem(elem.id, 'Nothing.jpg');
        }
    })
};

export function QuantityPos(){
selectQuantity.addEventListener('change',()=>{
    getData();
})
}

// if (document.location.hostname.includes('127.0.0.1')) {
    if(document.location.pathname.includes('index.html')){
    getData();
    btn.addEventListener('click', () => {
        cards.innerHTML = ''
        getData();
    })
    numSpan.innerText = `${pageCount} из 5`
    buttonPagin.addEventListener('click',(event) =>{
        if(event.target.id === 'numSpan'){
            dropDownMenuOpen();
        }else{
            dropDownMenuClose();
        }
        if(event.target.id === 'button-right'){
            RightButtonPagin();
        }
        if(event.target.id === 'button-left'){
            LeftButtonPagin();
        }
        if(event.target.closest('.li-pagin')){
        pageCount = event.target.innerText;
        apiTwo = `shows?page=${pageCount}`;
        numSpan.innerText = `${pageCount} из 5`;
        }
    getData();
    })
// }
} else {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const valueLocal = localStorage.getItem(key);
        const imgFavourite = document.createElement('img');
        imgFavourite.style.marginLeft = '40px';
        imgFavourite.style.marginTop = '40px';
        imgFavourite.setAttribute('src', valueLocal);
        const cardFavourite = document.createElement('div');
        cardFavourite.id = 'cardFavourite';
        cardFavourite.append(imgFavourite);
        cardsFavourite.append(cardFavourite);
        const btn3 = document.createElement('button');
        btn3.style.width = '20px';
        btn3.style.height = '20px';
        btn3.style.position = 'absolute';
        btn3.style.bottom = '0';
        btn3.style.right = '0';
        cardFavourite.style.position = 'relative';
        cardFavourite.append(btn3);
        btn3.addEventListener('click', function () {
            btn3.style.background = 'red';
            localStorage.removeItem(key);
            location.reload();
        })
    }
}

const RightButtonPagin = function(){
    if(pageCount !== 5){
        cards.innerHTML = '';
        apiTwo = `shows?page=${++pageCount}`;
        numSpan.innerText = `${pageCount} из 5`;
        getData();
    }
}

const LeftButtonPagin = function(){
    if(pageCount !== 1){
        cards.innerHTML = '';
        apiTwo = `shows?page=${--pageCount}`;
        numSpan.innerText = `${pageCount} из 5`
        getData();
    }
}

const dropDownMenuOpen = function(){
    numSpanPages.style.display = 'block';
    numSpanPages.style.marginLeft = '-190px';
    numSpanPages.style.marginTop = '20px';
}

const dropDownMenuClose = function(){
    numSpanPages.style.display = 'none';
}
