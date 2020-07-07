let imagens= document.querySelectorAll('img[class=vendas]');
let modal= document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let modalImg = document.querySelector('bt_close')
let srcVal="";

for(let i = 0; i<imagens.length;i++){
    imagens[i].addEventListener('click', function(){
        alert(i)
    });
}