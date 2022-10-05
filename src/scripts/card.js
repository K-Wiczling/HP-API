const card = (name , src) => {
    if (src === '') src = 'defaultnew.png'
    const cardElement = `
        <div class="card">
            <div>
                <p class="card-p">${name}</p>
            </div>
            <div>
            <img src="${src}" class="card-image"><img>
            </div>
            <div>
                <button class="card-btn" onclick="removeFromFavorite('${name}')">Remove form favorite</button>
            </div>
        </div>
    `;
return cardElement;
}