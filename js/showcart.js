iconCart = document.querySelector('#icon-cart');
conteinerCart = document.querySelector("#conteiner__cart");
conteinerNavShop = document.querySelector("#conteiner__nav-shop");
iconBack = document.querySelector("#icon-back"); 

iconCart.addEventListener('click',() => {
    conteinerCart.classList.toggle("content_cart-show");
    conteinerNavShop.classList.toggle("conteiner__nav-shop-show");
});

iconBack.addEventListener("click", () => {
    conteinerCart.classList.toggle("content_cart-show");
    conteinerNavShop.classList.toggle("conteiner__nav-shop-show");
})