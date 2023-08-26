let productos = [];

fetch("/Landing/assets/js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        CargarProductos(productos);
    })

const contenedorProducto = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito= document.querySelector("#numerito");



function CargarProductos(productosElegidos) {

    contenedorProducto.innerHTML="";

    productosElegidos.forEach(producto => {

        const div =document.createElement("div")
        div.classList.add("producto")
        div.innerHTML=`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle">
            <h3 class="producto-titulo">${producto.titulo} </h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProducto.append(div);

    });

    actualizarBotonesAgg();
    //console.log(botonesAgregar);
    
}



botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e)=>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id!="todos") {
            const productoCategoria=productos.find(producto=> producto.categoria.id===e.currentTarget.id);
              //mas que todo aqui estamos trayendo al primero objeto y apartir de ese sacaremos su categoria
            //console.log(productoCategoria)
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton=productos.filter(producto => producto.categoria.id === e.currentTarget.id);  
             //console.log(productosBoton)
            CargarProductos(productosBoton);
        }
        else{
            tituloPrincipal.innerHTML="Todos los productos";
            CargarProductos(productos);
        }

    })

    
    
});

//console.log(botonesAgregar);
//se llamara esta funcion para tener una instancia de los botones a la hora de crearlos
//mas que todo para tener las lista de los botones
//cada vez que se ejecute la funcion de cargr productos
//entonces cada vez se actualizaran los botones agregar
//se asiganaran se traeran del DOM y le agregamos un event lsitener
function actualizarBotonesAgg(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    //LOS ESTAREMOS REASIGNANDO
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })

};

//mas qwu todo lo que hacemos aqui es que en nuestro front quedede esa persistencia del local storage reflejada cuando cambiamos de pagina entre main y carrito
let productosEnCarrito;

let productoEnCaritoList= localStorage.getItem("productos-en-carrito");
const productosEnCarritoList = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoList) {

     productosEnCarrito=JSON.parse(productosEnCarritoList) ;
     actualizarNumerito();
    
} else {
    productosEnCarrito=[];
    
}

//como en el boton en la linea 237 le estamos mandando el id del producto que 
//que queremos que registre sera mas facil agregarlo al array de productos cuando
//lo agregen

function agregarAlCarrito(evento){



    //agragando una ventanita cada vez que se agrega un producto usando toastify
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = evento.currentTarget.id;
    //jalamos el id de producto que anterior mente le asignamos al boton en la linea 237
    //console.log(idBoton)
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    //recordemos que find nos devuelve el primer elemento que coincida con lo que le pngamops adentro

    //logica para verificar si ya existe ese producto en el array y no agregarlo como tal otravez sino
    // aumentar la cantidad
    //some nos devuelve un true  si encuentra o no un producto repetido
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       //en la linea 310 estamos sacando el indice del producto que coincidio con el id que recibio
        productosEnCarrito[index].cantidad++;
        //y en la linea 312 ya teniendo ese indice de ese objeto en el array entonces, igresamos a cantidad y la aumentamos
        
    } else {
        productoAgregado.cantidad= 1; 
        productosEnCarrito.push(productoAgregado);
        
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
    //aqui estamos mandando el array de productos en carrito al almacenamiento del local storage
    // para mas adelante mandar esa informacion al carrito
    // la idea de hacer esto directamente asi es para tener informacion persistentente en el navegador del usuario
    //pero no mandar esa informacion directamente a la base de datos sino hasta que se realice la compra
}

//mas que todo creamos una funcion como tal ya que se fue dando la necesidad de usar la misma logica en dos lugares del codigo
function actualizarNumerito(){
    let aumentoNumerito= productosEnCarrito.reduce((acumulador,producto)=>acumulador+producto.cantidad,0)
    //pracricamente usaremos el metodo reduce el cual tendra dos variables el acumulador y el producto
    //entonces cada vez que agreguemos x cantidad de x productos entonces lo ira almacenando en acumulador
    // el 0 del final es porque la funcion pide  con que valor quieres que comience 
    //console.log(numerito);
    numerito.innerText=aumentoNumerito;
}





