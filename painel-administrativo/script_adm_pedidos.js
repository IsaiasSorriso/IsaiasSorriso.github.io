document.getElementById('botao_Aceitar').onclick = () =>{
    Swal.fire({
        title: "Confirmar Reserva?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Confirmar"
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Reserva Confirmada!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Reserva Negada", "", "error");
        }
      });
};