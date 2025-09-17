const Boton = () => {
    const handleClick = () =>{
        alert('Botón Clikeado Jubilate');
    }

    return(

        <button onClick={handleClick}>Click me</button>
    )

}

export default Boton;