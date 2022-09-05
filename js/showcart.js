
const iconCart = document.querySelector('#icon-cart');
const conteinerCart = document.querySelector("#conteiner__cart");
const conteinerNavShop = document.querySelector("#conteiner__nav-shop");
const iconBack = document.querySelector("#icon-back"); 

iconCart.addEventListener('click',() => {
    conteinerCart.classList.toggle("content_cart-show");
    conteinerNavShop.classList.toggle("conteiner__nav-shop-show");
});

iconBack.addEventListener("click", () => {
    conteinerCart.classList.toggle("content_cart-show");
    conteinerNavShop.classList.toggle("conteiner__nav-shop-show");
})
