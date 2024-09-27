// Carrito
const carrito = document.getElementById('carrito');
const contenedor = document.querySelector('.submenu');
const producto = document.getElementById('lista-1');
const vaciarCarritoBtn= document.getElementById('vaciar-carrito');


console.log(contenedor);


MostrarCarrito()
function MostrarCarrito() {
    carrito.addEventListener('click', ()=> {
        const modal = new bootstrap.Modal(document.getElementById('Mimodal'));
    })
}

function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento); 
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito); 
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('btn-2')) { 
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.price p').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width=100 >
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href="#" class="borrar" data-id="${elemento.id}">X</a> <!-- Cambié 'herf' a 'href' y la interpolación -->
        </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento, elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
