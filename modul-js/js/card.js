import {setFavourite} from './main.js'

export function createCard(elem) {
    const btn2 = document.createElement('button');
    btn2.style.width = '20px';
    btn2.style.height = '20px';
    btn2.style.position = 'absolute';
    btn2.style.bottom = '50px';
    btn2.style.right = '0';
    const img = document.createElement('img');
    img.style.marginLeft = '40px';
    img.style.marginTop = '40px';
    if (!elem.image) {
        img.setAttribute('src', 'Nothing.jpg');
    }  else {
        img.setAttribute('src', elem.image.medium);
    }
    const card = document.createElement('div');
    const nameCard = document.createElement('p');
    nameCard.className = 'nameCard';
    card.style.position = 'relative';
    card.id = 'card';
    nameCard.style.textAlign = 'center';
    nameCard.style.marginLeft = '30px';
    nameCard.append(elem.name);
    nameCard.style.bottom = '30px';
    card.append(img);
    card.append(btn2);
    cards.append(card);
    card.append(nameCard);
    setFavourite(elem,btn2);

    card.addEventListener('click',(event)=>{
        if(event.target === img){
        nameCard.remove();
        const imgModal = img.cloneNode(img)
        btn2.style.display = 'none';
        const divImgModal = document.createElement('div');
        const divModalCard = document.createElement('div');
        const divModalBack = document.createElement('div');
        const divModalText = document.createElement('div');
        const divTextClose = document.createElement('button');
        const divModalTextName = document.createElement('div');
        const divModalTextLang = document.createElement('div');
        const divModalTextGenre = document.createElement('div');
        const divModalSummary = document.createElement('div')
        document.body.prepend(imgModal);
        divModalBack.style.backgroundColor = 'rgba(0, 0, 0, 0.65)';
        divModalBack.style.zIndex = '1000';
        divModalBack.style.position ='fixed';
        divModalBack.style.height = '100%';
        divModalBack.style.width = '100%';
        document.body.prepend(divModalBack);
        divModalCard.prepend(imgModal); 
        divModalBack.prepend(divModalCard);
        divModalCard.prepend(divTextClose);
        divModalBack.style.display = 'flex';
        divModalBack.style.alignItems = 'center';
        divModalBack.style.justifyContent = 'center';
        divModalCard.prepend(divModalText);
        divImgModal.append(imgModal);
        divTextClose.prepend('Закрыть');
        divTextClose.style.marginTop = '70px';
        divTextClose.style.marginLeft = '380px';
        divTextClose.addEventListener('click',(event) => {
            console.log(event.target === divTextClose)
            if(event.target === divTextClose)
                divModalBack.style.display = 'none';
                divModalBack.style.backgroundColor = 'rgba(0, 0, 0,0)';
                btn2.style.display = 'flex';
            })
        divModalText.prepend(divModalTextName);
        divModalText.appendChild(divModalTextLang);
        divModalText.appendChild(divModalTextGenre);
        divModalText.appendChild(divModalSummary);
        divModalText.style.marginTop = '-280px';
        divModalText.style.marginLeft = '250px';
        divModalTextName.prepend('Name: ' + elem.name);
        divModalTextLang.prepend('Language: ' + elem.language);
        divModalTextLang.style.paddingTop = '10px';
        divModalTextGenre.prepend('Genre: ' + elem.genres);
        divModalTextGenre.style.paddingTop = '10px';
        const ElemSum = elem.summary.replace('<p>','').replace('</p>','').replace('<b>','').replace('</b>','').slice(0,180);
        divModalSummary.append('Summary: ' + `${ElemSum}...`);
        divModalSummary.style.paddingTop = '10px';
        divModalCard.prepend(divImgModal);
        divModalCard.style.width = '480px';
        divModalCard.style.height = '400px';
        divModalCard.style.background = 'white';
        };
    })
};