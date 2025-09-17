//Componente con props pasa objetos a otro componente(funcion) "MuestraListado"
//Este es el componente padre

import MuestraList from './MuestraListado';


const Listadoprops = () => {
 
    const Datosest= [

                        { dni: 1222, nombre:"Juan", edad:28},
                        { dni: 21111, nombre:"Pedro", edad:20},
                        { dni: 33333, nombre:"Alberto", edad:21}

                    ]
    

    return(

           <div>

            {Datosest.map((estudiante, index) => (
                console.log(index,estudiante),
                    <MuestraList key={index} props={estudiante} />
             ) 
                         )
            }

        </div>
    
    )

}

export default Listadoprops;