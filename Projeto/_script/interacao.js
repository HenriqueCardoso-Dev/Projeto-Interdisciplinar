const nameValue = document.querySelector("input[name=nome]");

const buttonSend = document.querySelector("input[name=buttonS]");
    buttonSend.addEventListener("click", function msgReturn(){
        alert(`Muito obrigado ${nameValue.value}, suas informações foram enviadas com sucesso!\n\nEm breve retronaremos com o orçamento em seu e-mail.`);
    });