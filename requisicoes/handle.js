const api = {
  
    usuario: {

        async registrarUsuario(bnome,bemail,bsenha){

            const response = fetch("http://localhost/back-end-developer/src/Router/Usuarios/cadastrar", {
                method: "POST",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors",
                body: JSON.stringify({
                    nome: bnome,
                    email: bemail,
                    login: bnome,
                    senha: bsenha
                })
            }).then(data => data.json());
    
            return (await response);
        },

        async logarUsuario(bnome,bsenha){

            const response = fetch("http://localhost/back-end-developer/src/Router/Usuarios/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                },
                mode: "cors",
                body: JSON.stringify({
                    login: bnome,
                    senha: bsenha
                })
            }).then(data => data.json());
    
            return (await response);
    
        }
        
    },


    sala: {
        async listarSalas(){

            const response = fetch("http://localhost/back-end-developer/src/Router/Salas", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + window.localStorage.getItem('token')  
                },
                mode: "cors"
            }).then(data => data.json());

            return (await response);
    
      },
      
      reserva: {

          async registrarReserva(nome_sala,periodo,data,horario_final,horario_inicial,intuito ){

              const response = fetch("http://localhost:8080/src/Router/Reserva.php", {
                  method: "POST",
                  headers: {
                      "Accept": "application/json"
                  },
                  mode: "cors",
                  body: JSON.stringify({
                      sala: nome_sala,
                      periodo: periodo,
                      data: data,
                      horario_final: horario_final,
                      horario_inicial: horario_inicial,
                      intuito: intuito
                  })
              });

              return await response;

          }

      },

        async deletarReserva(id_reserva,nome_sala,periodo,data,horario_final,horario_inicial,intuito ){

            const response = fetch("http://localhost:8080/src/Router/Reserva.php", {
                method: "Delete",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors",
                body: JSON.stringify({
                    id: id_reserva ,
                    sala: nome_sala,
                    periodo: periodo,
                    data: data,
                    horario_final: horario_final,
                    horario_inicial: horario_inicial,
                    intuito: intuito
                })
            });

            return await response;

        },

        async atualizarReserva(id_reserva,nome_sala,periodo,data,horario_final,horario_inicial,intuito ){

            const response = fetch("http://localhost:8080/src/Router/Reserva.php", {
                method: "PUT",
                headers: {
                    "Accept": "application/json"
                },
                mode: "cors",
                body: JSON.stringify({
                    id: id_reserva ,
                    sala: nome_sala,
                    periodo: periodo,
                    data: data,
                    horario_final: horario_final,
                    horario_inicial: horario_inicial,
                    intuito: intuito
                })
            });

            return await response;

        }
        
    }


}

export {api};