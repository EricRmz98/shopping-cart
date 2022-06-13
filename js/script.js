let clothes = [
    {id: 0, model: 'Jerzees Playera Roja cuello redondo', price: 4, image: 'https://m.media-amazon.com/images/I/817Y6vYh72L._AC_SX679_.jpg' },
    {id: 1, model: 'Jerzees Playera Azul Marino cuello redondo', price: 4, image: 'https://m.media-amazon.com/images/I/71H698q-HWL._AC_SX679_.jpg'},
    {id: 2, model: 'Jerzees Playera Negra cuello redondo', price: 4, image: 'https://m.media-amazon.com/images/I/71LlyfBdJXL._AC_SX679_.jpg'},
    {id: 3, model: 'Jerzees Playera Gris Claro cuello redondo', price: 4, image: 'https://m.media-amazon.com/images/I/917UPGH7BTL._AC_SX569_.jpg'},
    {id: 4, model: 'Champion Playera Negra de manga larga', price: 14, image: 'https://m.media-amazon.com/images/I/71WoPu3tYkL._AC_SX569_.jpg' },
    {id: 5, model: 'Champion Playera Gris de manga larga', price: 14, image: 'https://m.media-amazon.com/images/I/91oAJj6dkZS._AC_SX679_.jpg'},
    {id: 6, model: 'Champion Playera Blanca de manga larga', price: 14, image: 'https://m.media-amazon.com/images/I/511N5NMVLNL._AC_SX522_.jpg'},
    {id: 7, model: 'Hanes Hoodie Rosa Palido', price: 16, image: 'https://m.media-amazon.com/images/I/61oLbsNWynL._AC_SX679_.jpg'},
    {id: 8, model: 'Hanes Hoodie Gris', price: 16, image: 'https://m.media-amazon.com/images/I/61fLxMmk1wL._AC_SX679_.jpg'},
]

function showProducts(clothesArray) {
    let html = '';
    for(let i = 0 ; i < clothesArray.length ; i++){
        html += `
        <div class="col-4 col-xl-3 col-xxl-2 p-1">
            <div class="card main-card d-flex flex-column py-3 align-items-stretch">
                <img src="${clothesArray[i].image}" class="card-img-top mx-auto">
                <div class="card-body d-flex flex-column justify-content-between">
                    <p class="card-text">${clothesArray[i].model}</p>
                </div>
                <div class="d-flex justify-content-between  mx-3">
                    <p class="card-text my-auto">$${clothesArray[i].price} usd</p>
                    <button class="add-to-cart-btn my-auto"><img src="./images/add_shopping_cart_FILL0_wght400_GRAD0_opsz48.png" alt=""></button>
                </div>
            </div>
        </div>`;
    }
    const container = document.getElementById('index-clothes-container');
    container.innerHTML += html;
}

showProducts(clothes);