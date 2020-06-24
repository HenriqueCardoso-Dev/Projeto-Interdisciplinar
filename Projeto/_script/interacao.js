// Coleta do input:
const nameInput = document.querySelector("input[name=nome]");


//Retorno ao usuário após envio do formulário
const buttonSend = document.querySelector("input[name=buttonS]");
    buttonSend.addEventListener("click", function msgReturn() {

        //criando a lista para depois conseguir pegar e exibir apenas o primeiro nome do usuário:
        const listName = nameInput.value.split(" ");

        //mensagem de retorno ao usuário após enviar o formulário.
        alert(`Muito obrigado ${listName[0]}, suas informações foram enviadas com sucesso!\n\nEm breve retronaremos com o orçamento em seu e-mail.`);
    });