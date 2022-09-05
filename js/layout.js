import { products } from "./data.js";
const conteinerStore = document.querySelector("#conteiner__store");
const conteinerCartBody = document.querySelector("#conteiner_cart-body")
const total = document.querySelector("#total");
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

function printOnCart(){
    let payment = 0;
    let html = "";
    const arrayCart = Object.values(cart);
    arrayCart.forEach(({id, name, url, amount, price}) =>{
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
        payment += (amount * price)
    })
    conteinerCartBody.innerHTML = html
    total.textContent = payment;
}

function printCategory(category){
    let html = "";
    products.forEach(({id, name, price, stock, consola, url}) =>{
        if(category === consola){
            html +=` 
            <div class="conteiner__store__card" data-consola = "${consola}">
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
        }
       
    });
    conteinerStore.innerHTML = html;    
} 

export {printProducts, printOnCart, printCategory, cart}