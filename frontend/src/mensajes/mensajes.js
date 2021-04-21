import Swal from 'sweetalert2';


export const mensajeAlert =  async (tipo, mensaje) => {

  let verdadero;

  if(tipo === 'success' || tipo === 'error' || tipo === 'info'){
    Swal.fire({
      icon: `${tipo}`,
      title: `${mensaje}`,
      showConfirmButton: false,
      timer: 1000
    })
    
  }else if(tipo === 'confirmar'){
    
   await  Swal.fire({
      title: 'Seguro que quieres realizar esta acción?',
      
      showCancelButton: true,
      confirmButtonText: `Eliminar`,
      cancelButtonText : `Cancelar`,
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      
      if (result.isConfirmed) {
        
        verdadero = result.isConfirmed;

        Swal.fire(`Eliminado`, '', 'success')
            
      } else if (result.isDenied) {
        Swal.fire('Acción cancelada', '', 'info')
      }
     
    })
  }

   return verdadero;
    
}