//Este es el componente hijo
//Recibe datos de Listado.jsx y los muestra
//Agrego componente boton y lo hago hijo de MuestraListado

import Boton from "./Boton";

const MuestraList = ({props}) => {
    const{dni,nombre,edad}= props;

    
    return(
        
        <div>

           <h3>DNI: {dni} Nombre: {nombre} Edad: {edad}</h3>
           <Boton />

        </div>
    )


}

export default MuestraList;

