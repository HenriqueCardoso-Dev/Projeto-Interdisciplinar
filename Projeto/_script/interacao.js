// Coleta de input's:
const nameInput = document.querySelector("input[name=nome]");

const emailInput = document.querySelector("input[name=email]");

const tellInput = document.querySelector("input[name=telefone]");

const msgTextArea = document.querySelector("input[name=msgTxt]");

const nSerieInput = document.querySelector("input[name=serie]");

const gbSizeInput = document.querySelector("input[name=hd]");

const imgInput = document.querySelector("input[name=arquivos");


const buttonSend = document.querySelector("input[name=buttonS]");
    buttonSend.addEventListener("click", function msgReturn(){
        alert(`Muito obrigado ${nameInput.value}, suas informações foram enviadas com sucesso!\n\nEm breve retronaremos com o orçamento em seu e-mail.`);
    });