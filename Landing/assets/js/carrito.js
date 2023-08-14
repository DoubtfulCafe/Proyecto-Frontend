//traeremos lo que necesitaremos del DOM mas qwu todo los estados de la pagina y la seccion donde inyectareemos el html
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoConProductos = document.querySelector("#carrito-con-productos");
const carritoAcciones = document.querySelector("#carrito-acciones");
const carritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar=document.querySelectorAll(".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const botonComprar = document.querySelector("#carrito-aciones-comprar");
const contenedorTotal= document.querySelector("#total");
let productodEnCarrito = localStorage.getItem("productos-en-carrito");
//luego aqui en traeremos los productos que estan el el locacal storage

productodEnCarrito= JSON.parse(productodEnCarrito);
//ahora recordemos que tenemos dos formas en nuestro carrito la primera es cuando no tenemos ningun producto agregado al 
//carrito entonces se estara mostrando el mensaje  carrito esta vacio que esta en la linea 44 del html de carrito
// este siempre tiene un estado de display para mostrarse
// y el otro estado de nuestra pagina es cuando se agregan productos al carrito el cual mostraria una targetita vertical
//lo cual mostraria mas que todo los detalles del producto en si, como ya sabemos como saber si tenemos productos
// en el carrito por medio de el array que le mandamos por localstorage, entonces pondremos condicionales de los estados de la
// pagina a apartir de ese array
function cargarProductosCarrito() {
    if (productodEnCarrito && productodEnCarrito.length > 0) {

        

        carritoVacio.classList.add("disable");
        carritoConProductos.classList.remove("disable");
        carritoAcciones.classList.remove("disable");
        carritoVacio.classList.add("disable");
    
        carritoConProductos.innerHTML="";//com siempre con esto nos aseeguramos que el contenedor quede vacio antes de agregar cosas
    
    
        productodEnCarrito.forEach(producto => {
    
            const div= document.createElement("div");
            div.classList.add("producto-carrito");
            div.innerHTML=`<img class="carrito-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                 
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>${producto.precio*producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash3-fill"></i></button>
                `
                carritoConProductos.append(div);
            
        });
        
    
    
    
    }else{
        carritoVacio.classList.remove("disable");
        carritoConProductos.classList.add("disable");
        carritoAcciones.classList.add("disable");
        carritoComprado.classList.add("disable");
    
    
    }
    actualizarBotonesEliminar();
    actualizarTotal();
};
cargarProductosCarrito();




function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    //LOS ESTAREMOS REASIGNANDO
    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })

};
function eliminarDelCarrito(e) {
    const idBoton= e.currentTarget.id;
    //console.log(idBoton);
    //const  productoEliminado = productodEnCarrito.find(producto=> producto.id=== idBoton);
    //console.log(productoEliminado);
    const index = productodEnCarrito.findIndex(producto=> producto.id === idBoton);
    //console.log(productodEnCarrito);
    productodEnCarrito.splice(index,1);
    //console.log(productodEnCarrito);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito",JSON.stringify(productodEnCarrito) );

}


botonVaciar.addEventListener("click",vaciarCarrito);

function vaciarCarrito(e) {
    productodEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito",JSON.stringify(productodEnCarrito) );
    cargarProductosCarrito();
}

//mira esta funcion lo que hace es que va a sumar el total todos los productos que se agregen en el carrito
// de que manera pues tenemos la variable acumulador en ella se sumara todos los totales , tenemos la variable prooductos
// y pues ira recolentando el total de cada producto dependiendo su precio y cantidad
function actualizarTotal() {
    const totalCalculado=productodEnCarrito.reduce((acumulador,producto)=>acumulador +(producto.precio*producto.cantidad),0);
    contenedorTotal.innerText= `Lps. ${totalCalculado}`;
    
}

botonComprar.addEventListener("click",comprarCarrito);

function comprarCarrito(e) {
    productodEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito",JSON.stringify(productodEnCarrito) );

    carritoVacio.classList.add("disable");
    carritoConProductos.classList.add("disable");
    carritoAcciones.classList.add("disable");
    carritoComprado.classList.remove("disable");
}
