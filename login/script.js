import { api } from "../requisicoes/handle.js";

document.addEventListener('DOMContentLoaded',  () => {

    //ao submitar
    document.querySelector("#registroformulario").addEventListener('submit', async (event) => {
        event.preventDefault();        
        
        let email = document.querySelector('input[type=text]').value;
        let senha = document.querySelector('input[type=password]').value;
            
        let logged = await api.usuario.logarUsuario(email, senha);

        if (logged.error) {
            
            document.querySelector('#feedback').innerHTML = "Credenciais incorretas.";

        }

        if(logged.success){

            localStorage.setItem('data', JSON.stringify(logged));

            window.location = '/painel-administrativo'

        }


    });

});