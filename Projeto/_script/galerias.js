//Declaração de variáveis
let imagens = document.querySelectorAll('img.vendas');
let modal = document.querySelector('div.modal');
let modalImg = document.querySelector('img#modal_img');
let btnclosed = document.querySelector('span#bt_close');


//codigicação da galeria Vendas
for(let i = 0; i < imagens.length;i++){
    imagens[i].addEventListener('click', function () {
        console.log(i);

        //ações a serem feitas e acordo com a navegação do usuário
        switch (i) {

            case 0 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto1.jpg" id="modal_img">';
                document.querySelector('img#modal_img').style.width = '35%';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 1 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto2.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 2 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto3.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 3 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto4.jpg" id="modal_img">';
                document.querySelector('img#modal_img').style.width = '35%';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 4 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto5.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 5 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto6.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 6 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto7.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 7 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto8.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 8 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto9.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;

            case 9 :
                document.querySelector('div.modal_content').innerHTML = '<img src="../_media/_photos/foto10.jpg" id="modal_img">';
                document.querySelector('div.modal').style.visibility = 'visible';
            break;
        };    
        
        //dando funcionalidade ao botão "X".
        btnclosed.addEventListener('click', function fechar() {

            document.querySelector('div.modal').style.visibility = 'hidden';

        });


    });
}