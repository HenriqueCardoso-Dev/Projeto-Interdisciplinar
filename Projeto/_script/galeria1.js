let imagens = document.querySelectorAll('img.vendas');
let modal = document.querySelector('div.modal');
let modalImg = document.querySelector('img#modal_img');
let btnclosed = document.querySelector('span#bt_close')
let srcVal =  "";

for(let i = 0; i < imagens.length;i++){
    imagens[i].addEventListener('click', function () {
        console.log(i);
    });
}