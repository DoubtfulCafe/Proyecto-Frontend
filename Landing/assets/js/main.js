// PRODUCTOS
const productos = [
    // headsets
    {
        id: "headset-01",
        titulo: "headset 01",
        imagen: "assets/img/Headset/01.jpg",
        categoria: {
            nombre: "Headsets",
            id: "headset"
        },
        precio: 1000
    },
    {
        id: "headset-02",
        titulo: "headset 02",
        imagen: "assets/img/Headset/02.jpg",
        categoria: {
            nombre: "Headsets",
            id: "headset"
        },
        precio: 1000
    },
    {
        id: "headset-03",
        titulo: "headset 03",
        imagen: "assets/img/Headset/03.jpg",
        categoria: {
            nombre: "Headsets",
            id: "headset"
        },
        precio: 1000
    },

    {
        id: "headset-04",
        titulo: "headset 04",
        imagen: "assets/img/Headset/04.jpg",
        categoria: {
            nombre: "Headsets",
            id: "headset"
        },
        precio: 1000
    },
    {
        id: "headset-05",
        titulo: "headset 05",
        imagen: "assets/img/Headset/05.jpg",
        categoria: {
            nombre: "Headsets",
            id: "headset"
        },
        precio: 1000
    },
    {
        id: "headset-06",
        titulo: "headset 06",
        imagen: "assets/img/Headset/06.jpg",
        categoria: {
            nombre: "Headsets",
            id: "headset"
        },
        precio: 1000
    },
    {
        id: "headset-07",
        titulo: "headset 07",
        imagen: "assets/img/Headset/07.jpg",
        categoria: {
            nombre: "Headsets",
            id: "headset"
        },
        precio: 1000
    },

    // Teclados
    {
        id: "teclado-01",
        titulo: "Teclado 01",
        imagen: "assets/img/teclados/01.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },
    {
        id: "teclado-02",
        titulo: "Teclado 02",
        imagen: "assets/img/teclados/02.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },{
        id: "teclado-03",
        titulo: "Teclado 03",
        imagen: "assets/img/teclados/03.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },{
        id: "teclado-04",
        titulo: "Teclado 04",
        imagen: "assets/img/teclados/04.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },{
        id: "teclado-05",
        titulo: "Teclado 05",
        imagen: "assets/img/teclados/05.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },{
        id: "teclado-06",
        titulo: "Teclado 06",
        imagen: "assets/img/teclados/06.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },{
        id: "teclado-07",
        titulo: "Teclado 07",
        imagen: "assets/img/teclados/07.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },{
        id: "teclado-07",
        titulo: "Teclado 07",
        imagen: "assets/img/teclados/07.jpg",
        categoria: {
            nombre: "Teclados",
            id: "teclados"
        },
        precio: 1000
    },
    // Mouse
    {
        id: "mouse-01",
        titulo: "Mouse 01",
        imagen: "assets/img/mouse/01.jpg",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 1000
    }, {
        id: "mouse-02",
        titulo: "Mouse 02",
        imagen: "assets/img/mouse/02.jpg",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 1000
    }, {
        id: "mouse-03",
        titulo: "Mouse 03",
        imagen: "assets/img/mouse/03.jpg",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 1000
    }, {
        id: "mouse-04",
        titulo: "Mouse 04",
        imagen: "assets/img/mouse/04.jpg",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 1000
    }, {
        id: "mouse-05",
        titulo: "Mouse 05",
        imagen: "assets/img/mouse/05.jpg",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 1000
    }, {
        id: "mouse-05",
        titulo: "Mouse 05",
        imagen: "assets/img/mouse/05.jpg",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 1000
    }, {
        id: "mouse-06",
        titulo: "Mouse 06",
        imagen: "assets/img/mouse/06.jpg",
        categoria: {
            nombre: "Mouses",
            id: "mouses"
        },
        precio: 1000
    }
    
];

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

CargarProductos(productos);

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





