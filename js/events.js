import { products } from "./data.js";
import {printProducts, printOnCart, printCategory, cart} from "./layout.js"


const conteinerStore = document.querySelector("#conteiner__store");
const conteinerCartBody = document.querySelector("#conteiner_cart-body");
const conteinerCategorias = document.querySelector(".conteiner__categorias");



conteinerStore.addEventListener("click", (e) => {
    if(e.target.classList.contains('btn_add')){
        const idGame = +e.target.parentElement.id;
        const game = products.find((item) => item.id === idGame);
      

        if(cart[idGame] && cart[idGame].amount < 10){
            cart[idGame].amount ++;
        }else if(!cart[idGame]){
            cart[idGame] = game;
            cart[idGame].amount = 1
        }
        printOnCart()
    }
})

conteinerCartBody.addEventListener("click", (e) => {
   
    const idGame = e.target.parentElement.id;
    if(e.target.classList.contains("bx-minus")){
        cart[idGame].amount --;
        if(cart[idGame].amount === 0){
            let respuesta = confirm("¿sure you want to delete this product?")
            if(respuesta)
                delete cart[idGame];
            else
             cart[idGame].amount ++; 
        }
    }        

    if(e.target.classList.contains("bx-plus-medical")){
        if(cart[idGame].amount < cart[idGame].stock){
            cart[idGame].amount ++;
        }else{
            alert("sorry, we cannot sell more than ten of the same products");
        }
    }
    if(e.target.classList.contains("bx-trash")){
        delete cart[idGame];
    }
    printOnCart();
})



conteinerCategorias.addEventListener("click", (e) => {
    if(e.target.classList.contains("all")){
        printProducts();
    }
    if(e.target.classList.contains("ps4")){
        printCategory("ps4");
    }
    if(e.target.classList.contains("xb")){
        printCategory("xb");
    }
    if(e.target.classList.contains("ns")){
        printCategory("ns");
    }
    if(e.target.classList.contains("pc")){
        printCategory("pc");
    }
})