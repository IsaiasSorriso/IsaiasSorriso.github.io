// COMEÇO

import { api } from "../requisicoes/handle.js";

document.getElementById('reserva_todas').addEventListener('click', function() {

    api.reserva.buscarReserva(reserva.Sala_nome,reserva.Periodo,reserva.data_selecionada,reserva.obs,reserva.horario_final,reserva.horario_inicial)

});

document.getElementById('professores_todas').addEventListener('click', function() {

    api.reserva.buscarUsuarios(bnome,bemail,bsenha)

});

document.getElementById('pedidos_todas').addEventListener('click', function() {

    api.reserva.buscarReserva(reserva.Sala_nome,reserva.Periodo,reserva.data_selecionada,reserva.obs,reserva.horario_final,reserva.horario_inicial)

});

document.getElementById('Sair').addEventListener('click', function() {

    Swal.fire({
        title: "Deseja Sair?",
        showDenyButton: true,
        confirmButtonText: "Sim",
        denyButtonText: `Não`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "../index.html";
        } 
      });

});