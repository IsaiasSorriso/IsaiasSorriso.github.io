function logout(){
    Swal.fire({
        title: "Você deseja mesmo sair?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sim",
        denyButtonText: `Não`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Até mais!", "", "success");
          window.location.href= '../index.html'
        } 
      });
     

      };
