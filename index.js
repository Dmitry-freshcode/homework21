"use strict";

const container = document.querySelector('.container');
fetch("./data.json")
    .then(data => data.json())
    .then(createCards)
    .catch(console.error);
function createCards(dataElements) {
    for (let elem of dataElements){
        let card = document.createElement('div');
        card.classList.add('card');
        let img = document.createElement('img');
        img.setAttribute('src',elem.img);
        card.appendChild(img);
        let name = document.createElement('div');
        name.classList.add('name');
        name.textContent = elem.name;
        card.appendChild(name);
        let description = document.createElement('div');
        description.classList.add('description');
        description.textContent = elem.description;
        card.appendChild(description);
        let price = document.createElement('div');
        price.classList.add('price');
        price.textContent ="Цена за штуку: " + elem.price ;
        card.appendChild(price);
        let count = document.createElement('div');
        count.classList.add('count');
        count.textContent = "В наличии: " +  elem.count + " шт.";
        card.appendChild(count);
        container.appendChild(card);
    }
}



