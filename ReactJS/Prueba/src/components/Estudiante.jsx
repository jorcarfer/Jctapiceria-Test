const Estudiantes = () => {
    
    const ListaEst = ["Juan Perez","Maria Gomez","Luis Galvez"];
    
    return(
        
        <div>

            {ListaEst.map((estudiante, index) => (
                console.log(index,estudiante),
                    <h2 key={index}>Index:{index} Nombre:{estudiante}</h2>
             ) 
                         )
            }

        </div>
    )


}

export default Estudiantes;

