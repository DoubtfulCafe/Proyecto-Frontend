



const formularioRegistro =()=>{
    document.getElementById('contenedor').style.display="none";
    document.getElementById('contenedor2').style.display="block";
}


/*const colorIcono=(iconSeleccionado)=>{
    const icono1 = document.getElementsById("icono-user");
    const icono2 = document.getElementsById("icono-pedidos");
    const icono3 = document.getElementsById("icono-pendientes");

    //let iconos = [icono1, icono2, icono3];
        if(iconSeleccionado==icono1){
            icono1.classList.remove("no-seleccionado");
            icono1.classList.add("seleccionado");

            icono2.classList.remove("seleccionado");
            icono2.classList.add("no-seleccionado");

            icono3.classList.remove("seleccionado");
            icono3.classList.add("no-seleccionado");

        } else if (iconSeleccionado==icono2){
            icono1.classList.remove("seleccionado");
            icono1.classList.add("no-seleccionado");

            icono2.classList.remove("no-seleccionado");
            icono2.classList.add("seleccionado");

        } else if (iconSeleccionado==icono3){
            icono2.classList.remove("seleccionado");
            icono2.classList.add("seleccionado");

            icono3.classList.remove("no-seleccionado");
            icono3.classList.add("seleccionado");
        }
}*/



function cambiarPestaña(idIcon, idDiv) {
    const icono = document.getElementById('idIcon');
    const miDiv = document.getElementById('idDiv');
  if (idDiv.style.display == 'none') {
    miDiv.style.display = 'block';
    icono.style.color = 'red'; /* Cambio de color del icono cuando se muestra el div */
  } else {
    miDiv.style.display = 'none';
    icono.style.color = 'blue'; /* Cambio de color del icono cuando se oculta el div */
  }
}




const renderizadoMotoristaPerfil = (id) =>{

  //usuarios.forEach(usuario => {
  //  
  //})
  //

  document.getElementById("perfil-motorista").innerHTML = 
      `<img id="img-perfil-motorista" class="imagen-redonda" src="assets/img_motorista/foto-perfil-motorista.jpg" alt="">
      <section id="nombre-tarjeta-perfil">
          <section id="texto-nombre">
              Kimpachi Sensei
          </section>
          <section id="texto-codigo">
              ID: 010823
          </section>
      </section>`;

  
      chats.forEach(chat =>{
          document.getElementById("lista-chats").innerHTML += 
          `<div id="card-chats" onclick="detalleChat(id)">
              <div>
                  ${validarFotoDestinatario(chat.imagenDestinatario, chat.nombreDestinatario)}
              </div>
              <div id="nombre-usuario-lista-chat">
                  ${chat.nombreDestinatario}
                      <div id="texto-usuario-lista-chat">
                          ${chat.ultimoMensaje}
                      </div>
              </div>
              <div id="hora-lista-chat">
                  ${chat.horaUltimoMensaje}
              </div>
          </div>`;
      })
  
}