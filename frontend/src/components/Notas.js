import React, { Fragment } from 'react'
import clienteAxios from '../config/axios';
import { mensajeAlert } from '../mensajes/mensajes';

const Notas = (props) => {

    const guardarNotas=props.guardarNotas;
    const notasList = props.notasList;
    const escucharLoad = props.escucharLoad;
      
       const eliminarNota = async (e) =>{
        
       const result = await  mensajeAlert('confirmar', 'mensaje')

       if(result){
        clienteAxios.delete(`/notas/${e.target.dataset.id}`)
        .then(res =>{

          console.log(res.data);
          escucharLoad(true);  

        })
       }
        
    }

    const rellenarForm = async (id) => {
        
            document.querySelector('.boton').textContent = 'Editar';
            const result = await clienteAxios.get(`/notas/${id}`);
            const not = result.data[0];
            console.log(not);
            guardarNotas({
               _id: id,
               titulo: not.titulo,
               descripcion: not.descripcion
            })  
       
    }
   
    /* VERIFICAR NOTAS */ 
    if(notasList.length === 0) return null;

    return (
        <Fragment>
            <div className="row">
                        {notasList.map(nota => (
                            <div className="col-md-4 " key={nota._id}>
                            <div className="card mt-4 id"   >
                              
                                <div  onClick={() => rellenarForm(nota._id)}> 
                                  <div className="row card-header">
                                    <div className="col ">
                                        <div className="titulo">
                                          {nota.titulo}
                                        </div>
                                    </div>
                                  </div>
                  
                                  <div className="card-body editar">
                                      {nota.descripcion}
                                  </div> 
                                </div>
                                <div className="card-footer" align="right">
                                        <span className="badge badge-danger badge-pill" align="left" ><button className="btn bg-transparent" onClick={eliminarNota} data-id={nota._id}>X</button></span>
                                </div>   
                            </div>
                        </div>
                        ))}
                  </div>

        </Fragment>
    )
}

export default Notas;

