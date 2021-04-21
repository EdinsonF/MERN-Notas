import React, {  useState, useEffect} from 'react'
import clienteAxios from '../config/axios';
import Formulario from './Formulario';
import Notas from './Notas';



 const Inicio = (props) => {
   
    /* STATE AGREGAR NOTAS - ACTUALIZAR */
    const [notas, guardarNotas] = useState({
        titulo: "",
        descripcion: ""
    }); 

    //STATE CONSULTAR NOTAS
  let [notasList, consultarNotas] = useState([]);

  //RECARGAR NOTAS
  const [recargar, escucharLoad] = useState(true);

  useEffect(() => {
      if(recargar){
          const consultarAPI = () => {
        
          clienteAxios.get('/notas')
          .then(res => {
            console.log(res.data);
              consultarNotas(res.data)
              escucharLoad(false);
        })
      }
      consultarAPI();
    }
    
  }, [recargar])


    return (
        

        <>
            <div className="App">
              <div>
                  <h1>Sistema de Notas</h1>
                  
              </div>
              <div className="row">
                  
                  <Formulario escucharLoad={escucharLoad} notas={notas} guardarNotas={guardarNotas}/>
                  
                <div className="col-md-8">
                    <div className="container">

                        <Notas notasList={notasList} escucharLoad={escucharLoad} guardarNotas={guardarNotas}/>
                        
                    </div>
                </div>
              </div>
            </div>
        </>       
    );
};

export default Inicio;