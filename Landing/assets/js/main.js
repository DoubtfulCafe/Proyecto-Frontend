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


function CargarProductos(productosElegidos) {
    productosElegidos.forEach(producto => {

        const div =document.createElement("div")
        div.classList.add("producto")
        div.innerHTML=`
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle">
            <h3 class="producto-titulo">${producto.titulo} </h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar id"${producto.id}">Agregar</button>
        </div>
        `;

        contenedorProducto.append(div);

    });
    
}

CargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e)=>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active");

        const productosBoton=productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        
        console.log(productosBoton)
        CargarProductos(productosBoton);

    })
});


