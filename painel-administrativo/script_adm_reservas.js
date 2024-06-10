document.getElementById('botao_alterar').onclick = () =>{
    Swal.fire({
        title: "Confirmar Alterar?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Alterar"
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Alterado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Não Alterado", "", "error");
        }
      });
}


  import { api } from "../requisicoes/handle.js";
  
  api.reserva.buscarReserva(reserva.Sala_nome,reserva.Periodo,reserva.data_selecionada,reserva.obs,reserva.horario_final,reserva.horario_inicial)
  api.usuario.buscarUsuario(bnome,bemail,bsenha);

function DisplayReservasAdm(buscarUsuario, buscarReserva) {
  const reserva_display = document.createElement('div');
  reserva_display.classList.add('informa')
  const dados1_display = document.createElement('div');
  dados1_display.classList.add('dados1')
  const dados2_display = document.createElement('div');
  dados2_display.classList.add('dados2')
  const dados3_display = document.createElement('div');
  dados3_display.classList.add('dados3')
  const dado_display = document.createElement('div');
  dado_display.classList.add('dados')
  const dado_info = document.createElement('div');
  dado_info.classList.add('dado_info')
  const dado = document.createElement('p');
  dado.classList.add('dado')
  const intuito = document.createElement('div');
  intuito.classList.add('dado')

}



