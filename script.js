const bar = document.getElementById('bar');
const cart1 = document.getElementById('cart1')
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}


if (cart1){
    cart1.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

