//traeremos lo que necesitaremos del DOM mas qwu todo los estados de la pagina y la seccion donde inyectareemos el html
const carritoVacio = document.querySelector("#carritoVacio");
const carritoConProductos = document.querySelector("#carrito-con-productos");
const carritoAcciones = document.querySelector("#carrito-acciones")

//luego aqui en traeremos los productos que estan el el locacal storage

const productodEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));
//ahora recordemos que tenemos dos formas en nuestro carrito la primera es cuando no tenemos ningun producto agregado al 
//carrito entonces se estara mostrando el mensaje  carrito esta vacio que esta en la linea 44 del html de carrito
// este siempre tiene un estado de display para mostrarse
// y el otro estado de nuestra pagina es cuando se agregan productos al carrito el cual mostraria una targetita vertical
//lo cual mostraria mas que todo los detalles del producto en si, como ya sabemos como saber si tenemos productos
// en el carrito por medio de el array que le mandamos por localstorage, entonces pondremos condicionales de los estados de la
// pagina a apartir de ese array
if (productodEnCarrito) {
    
}else{

}