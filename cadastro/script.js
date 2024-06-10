import { api } from "../requisicoes/handle.js";

document.addEventListener('DOMContentLoaded',  () => {
    
    //ao submitar
    document.querySelector("#registroformulario").addEventListener('submit', async (event) => {
        event.preventDefault();

        const campos = document.querySelectorAll('input[type=text]');

        let nome = campos[0].value;
        let email = campos[1].value;
        let senha = document.querySelector('input[type=password]').value;
        
        try {
            
            let registered = await api.usuario.registrarUsuario(nome, email, senha);

            if (registered.success) {
                
                document.querySelector('#feedback').innerHTML = "Você foi cadastrado com sucesso! &nbsp; <a href='/login'>Login</a>"
    
            }else{
    
                if (JSON.stringify(registered).indexOf('email') !== -1) {
                    document.querySelector('#feedback').innerHTML = "Email de usuário já existe.";
                }else if(JSON.stringify(registered).indexOf('login') !== -1){
                    document.querySelector('#feedback').innerHTML = "Login de usuário já existe.";
                }
                else{
    
                    document.querySelector('#feedback').innerHTML = "Ocorreu algum erro."
    
                }
    
            }

        } catch (error) {
            
            document.querySelector('#feedback').innerHTML = "Preencha os campos obrigatórios."

        }



    });



});