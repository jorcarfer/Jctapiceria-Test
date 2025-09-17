function enviarFormulario(event) {
       // event.preventDefault();

        const nombreContacto = document.getElementById('nombre').value.trim();
        const emailContacto = document.getElementById('contactoEmail').value.trim();
        const textoContacto = document.getElementById('texto').value.trim();

         if (!nombreContacto || !textoContacto || !emailContacto) {
            alert("Por favor, completa los campos.");
            return;
        }

     
            // Enviar el formulario
      //  document.getElementById('formulario').submit();
    }