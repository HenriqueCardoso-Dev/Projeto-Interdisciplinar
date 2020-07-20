// Coleta do input:
const nameInput = document.querySelector("input[name=nome]");
const emailInput = document.querySelector("input[name=email]");
const telInput = document.querySelector("input[name=telefone]");
const msgInput = document.querySelector("textarea[name=msgTxt]");
const hdInput = document.querySelector("input[name=hd]");


//Retorno ao usuário após envio do formulário
const buttonSend = document.querySelector("input[name=buttonS]");
    buttonSend.addEventListener("click", function msgReturn() {

        //criando a lista para depois conseguir pegar e exibir apenas o primeiro nome do usuário:
        const listName = nameInput.value.split(" ");

        if (nameInput.value !== "" && emailInput.value !== "" && telInput.value !== "" && msgInput.value !== "" && hdInput.value !== "") {

            //mensagem de retorno ao usuário após enviar o formulário.
            alert(`Muito obrigado ${listName[0]}, suas informações foram enviadas com sucesso!\n\nEm breve retronaremos com o orçamento em seu e-mail.`);
        } else {

            //mensagem de retorno ao usuário após tentar enviar o formulário incorretamente.
            alert(`Existe um campo não preenchido no formulário, verifique e tente novamente!`);

        }


        
    });