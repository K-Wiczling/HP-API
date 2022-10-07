const card = (name , src) => {
    if (src === '') src = '../images/defaultnew.png'

    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    const h3Element = document.createElement('h3');
    h3Element.innerText = name;

    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.className = 'card-image';
    
    const buttonElement = document.createElement('button');
    buttonElement.className = 'card-btn';
    buttonElement.innerText = 'Remove form favorite';
    buttonElement.setAttribute( 'onclick', `removeFromFavorite('${name}')`) ;

    cardElement.appendChild(h3Element);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(buttonElement);
    
    return cardElement;
}