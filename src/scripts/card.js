//Representation of the Single Card
const card = (name , src) => {
    
    //Show dafault image if API does not provide one
    if (src === '') src = '../images/defaultnew.png'

    //Single card Container
    const cardElement = document.createElement('div');
    cardElement.className = 'card';

    // Header for the card
    const h3Element = document.createElement('h3');
    h3Element.innerText = name;

    //Image for the card
    const imageElement = document.createElement('img');
    imageElement.src = src;
    imageElement.className = 'card-image';
    
    //Remove from favorite Button
    const buttonElement = document.createElement('button');
    buttonElement.className = 'card-btn';
    buttonElement.innerText = 'Remove form favorite';
    buttonElement.setAttribute( 'onclick', `removeFromFavorite('${name}')`) ;

    //Append all card children elemens 
    cardElement.appendChild(h3Element);
    cardElement.appendChild(imageElement);
    cardElement.appendChild(buttonElement);
    
    return cardElement;
}