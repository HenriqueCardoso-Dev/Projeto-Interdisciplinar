// Coleta de input's:
const nameValue = document.querySelector("input[name=nome]");

const emailInput = document.querySelector("input[name=email]");

const tellInput = document.querySelector("input[name=telefone]");

const msgTextArea = document.querySelector("input[name=msgTxt]");

//Coleta de valores vindos dos input's:



const buttonSend = document.querySelector("input[name=buttonS]");
    buttonSend.addEventListener("click", function msgReturn(){
        alert(`Muito obrigado ${nameValue.value}, suas informações foram enviadas com sucesso!\n\nEm breve retronaremos com o orçamento em seu e-mail.`);
    });