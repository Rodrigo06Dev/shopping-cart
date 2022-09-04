import { products } from "./js/data.js";

import "./js/showcart.js";



conteinerStore = document.querySelector("#conteiner__store");
conteinerCartBody = document.querySelector("#conteiner_cart-body")

const cart = {};

function printProducts(){
    let html = "";
    products.forEach(({id, name, price, stock, consola, url}) =>{
        
        html +=` <div class="conteiner__store__card" data-consola = "${consola}">
                    <div class="conteiner__store__card__img">
                        <img src="${url}" alt="${name}">
                    </div>
                    <div class="conteiner__store__card__des"  id="${id}">
                        <h2>${name}</h2>
                        <div class="container__store__card-details">
                        <p>$ ${price}</p>
                        <p>stock: ${stock}</p>
                        </div>
                        <i class='bx bx-cart-add btn_add')></i>     
                    </div>                      
                </div>`; 
    });
    conteinerStore.innerHTML = html;
    
} 
printProducts()
function printonCart(){
    let html = "";
    const arrayCart = Object.values(cart);
    arrayCart.forEach(({id, name, url, amount}) =>{
        html += `
        <div class="item_cart">
            <div class="item_cart-img">
                <img src="${url}" alt="">
            </div>    
            <h4 class="item_cart-title">${name}</h4>
            <div class="item_cart-options" id="${id}">
                <i class='bx bx-minus'></i>
                <span id="amount">${amount}</span>
                <i class='bx bx-plus-medical'></i>
                <i class='bx bx-trash'></i>
            </div>
    </div>`;
    })
    conteinerCartBody.innerHTML = html
}
conteinerStore.addEventListener("click", (e) => {
    if(e.target.classList.contains('btn_add')){
        const idGame = +e.target.parentElement.id;
        const game = products.find((item) => item.id === idGame);

        if(cart[idGame]){
            cart[idGame].amount ++;
        }else{
            cart[idGame] = game;
            cart[idGame].amount = 1
        }
        printonCart()
    }
})

conteinerCartBody.addEventListener("click", (e) => {
    const idGame = e.target.parentElement.id;
    if(e.target.classList.contains("bx-minus")){
        cart[idGame].amount --;
    }
    if(e.target.classList.contains("bx-plus-medical")){
        cart[idGame].amount ++;
    }
    if(e.target.classList.contains("bx-trash")){
        delete cart[idGame];
    }
    printonCart()
})