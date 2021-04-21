// @flow 
import React, {Fragment} from 'react';
import clienteAxios from '../config/axios';

import {mensajeAlert} from '../mensajes/mensajes';


const Formulario = (props) => {

    const notas = props.notas;
    const guardarNotas=props.guardarNotas;
    const escucharLoad = props.escucharLoad;
   
     
    const actualizaState = e =>{
        guardarNotas({
            ...notas, [e.target.name ]: e.target.value 
        })
    }
   

    const registrarNota = () =>{
        

        if(notas._id){
            actualizarNota();
        }else{

            clienteAxios.post('/notas', notas)
            .then(res =>{
                
                    console.log(res.data)
                    escucharLoad(true);
                    restablecerForm();
                    mensajeAlert('success', res.data.mensaje);
                    
                } 
            )
            
        }
        
    }


    const actualizarNota = () =>{
        clienteAxios.put(`/notas/${notas._id}`, notas)
        .then(res => {

            mensajeAlert('success', res.data.mensaje);
            escucharLoad(true);
        })
        restablecerForm();     
    }

    const validarForm = e => {
        e.preventDefault();
        if(notas.titulo === '' || notas.descripcion === '')
        {
            mensajeAlert('info', "Campos vacios");
        }else{
            registrarNota();
        }
    }


    const restablecerForm = () => {
        guardarNotas({
            titulo: "",
            descripcion: ""
        });
        document.querySelector('.boton').textContent = 'Registrar';
        
    }


    
    return (
        <Fragment>
            <div className="col-md-3 container">           
                <div className="card " >
                    <form className="card-body " onSubmit={validarForm}>                       
                            <h4>Agregar Nota</h4>
                        <div className="form-group">
                            <input type="text" name="titulo" className="form-control" placeholder="Titulo" onChange={actualizaState} value={notas.titulo}/>
                        </div>
                        
                        <div className="form-group">
                            <textarea name="descripcion" className="form-control" placeholder="Descripción" onChange={actualizaState} value={notas.descripcion}/>
                        </div>
                        <button type="submit" className="btn btn-primary boton">Registrar</button>
                    </form>

                </div>
            </div>
        </Fragment>
        
    );
};

export default Formulario;