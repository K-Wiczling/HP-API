const card = (name , src) => {
    if (src === '') src = '../images/defaultnew.png'
    const cardElement = `
        <div class="card">
            <h3 class="card-p">${name}</h3>
            <img src="${src}" class="card-image"><img>
            <button class="card-btn" onclick="removeFromFavorite('${name}')">Remove form favorite</button>
        </div>
    `;
return cardElement;
}