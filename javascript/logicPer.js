
// ------------ Declaracion de variables ------------

let prodPer = document.getElementById(`cardsPer`);
let precioMinimo = 0;
let precioMaximo = Number.POSITIVE_INFINITY;

// ------------ Cards dinamicas ------------

for (const itemsPer of prodPerPage){
    prodPer.innerHTML += `
        <div class="card__prod">
            <div class="card__prodcontainer">
                <a>
                <img src="${itemsPer.img}" alt="${itemsPer.alt}">
                </a>
            </div>
            <div class="card__proddetails">
            <h3>${itemsPer.name}</h3>
                <p class="card__price">${itemsPer.price}</p>
                <p class="card__pay">Hasta 6 cuotas sin interes</p>
                <a class="card__btn">Comprar</a>
            </div>
        </div>
    `
}

// ------------ Funciones aplicadas a las listas ------------

// ------------ Funciones en la seccion productos de las listas ------------

const filtrarPorPrecioMinimo = (prodPerPage, precioMin, precioMax) => {
    const filterMin = prodPerPage.filter(item => item.price >= precioMin && item.price <= precioMax);
    filterMin.sort((a,b) => a.price - b.price);
    return filterMin
}

const filtrarPorPrecioMaximo = (prodPerPage, precioMin, precioMax) => {
    const filterMax = prodPerPage.filter(item => item.price >= precioMin && item.price <= precioMax);
    filterMax.sort((a,b) => b.price - a.price);
    return filterMax
}

const listaDeOpciones = document.querySelectorAll(".priceP__list li");

const handleMostrarTodos = () => {
    mostrarProductos(prodPerPage); // Mostrar todos los productos sin filtrar
};

const handlePrecioMenosAMayor = () => {
    const productosFiltrados = filtrarPorPrecioMinimo(prodPerPage, precioMinimo, precioMaximo); 
    mostrarProductos(productosFiltrados);
};

const handlePrecioMayorAMenor = () => {
    const productosFiltrados = filtrarPorPrecioMaximo(prodPerPage, precioMinimo, precioMaximo); 
    mostrarProductos(productosFiltrados);
};

listaDeOpciones[0].addEventListener("click", handleMostrarTodos);
listaDeOpciones[1].addEventListener("click", handlePrecioMenosAMayor); 
listaDeOpciones[2].addEventListener("click", handlePrecioMayorAMenor);
const mostrarProductos = (productos) => {
    let contenidoHTML = "";
    productos.forEach(producto => {
        contenidoHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
    prodPer.innerHTML = contenidoHTML;
};

// ------------ Funciones en la seccion perifericos de las listas ------------

const elementMouse = document.getElementById("categoryP__list").getElementsByTagName("li")[0];
elementMouse.addEventListener("click", function() {

const categoryFilterMouse = "mouse";
        const categoriaMouse = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterMouse;
    })
    prodPer.innerHTML = "";
    categoriaMouse.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementKeyboard = document.getElementById("categoryP__list").getElementsByTagName("li")[1];

elementKeyboard.addEventListener("click", function() {
const categoryFilterKeyboard = "teclado";
        const categoriaKeyboard = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterKeyboard;
    })
    prodPer.innerHTML = "";
    categoriaKeyboard.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementMousepad = document.getElementById("categoryP__list").getElementsByTagName("li")[2];

elementMousepad.addEventListener("click", function() {

const categoryFilterMousepad = "mousepad";
        const categoriaMousepad = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterMousepad;
    })
    prodPer.innerHTML = "";
    categoriaMousepad.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementHeadphones = document.getElementById("categoryP__list").getElementsByTagName("li")[3];
elementHeadphones.addEventListener("click", function() {

const categoryFilterHeadphones = "auriculares";
        const categoriaHeadphones = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterHeadphones;
    })
    prodPer.innerHTML = "";
    categoriaHeadphones.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementAccessory = document.getElementById("categoryP__list").getElementsByTagName("li")[4];
elementAccessory.addEventListener("click", function() {

const categoryFilterAccessory = "accesorio";
        const categoriaAccessory = prodPerPage.filter(producto =>{
        return producto.category === categoryFilterAccessory;
    })
    prodPer.innerHTML = "";
    categoriaAccessory.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

// ------------ Funciones en la seccion marcas de las listas ------------

const elementHyperx = document.getElementById("brandP__list").getElementsByTagName("li")[0];

elementHyperx.addEventListener("click", function() {

const brandFilterHx = "hyperx";
        const marcaHyperx = prodPerPage.filter(producto =>{
        return producto.brand === brandFilterHx;
    });
    prodPer.innerHTML = "";
    marcaHyperx.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementRazer = document.getElementById("brandP__list").getElementsByTagName("li")[1];

elementRazer.addEventListener("click", function() {
const brandFilterRZ = "razer";
        const marcaRazer = prodPerPage.filter(producto =>{
        return producto.brand === brandFilterRZ;
    });
    prodPer.innerHTML = "";
    marcaRazer.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});

const elementSteelseries = document.getElementById("brandP__list").getElementsByTagName("li")[2];

elementSteelseries.addEventListener("click", function() {
const brandFilterSS = "steelseries";
        const marcaSteelseries = prodPerPage.filter(producto =>{
        return producto.brand === brandFilterSS;
    });
    prodPer.innerHTML = "";
    marcaSteelseries.forEach(producto => {
        prodPer.innerHTML += `
            <div class="card__prod">
                <div class="card__prodcontainer">
                    <a>
                        <img src="${producto.img}" alt="${producto.alt}">
                    </a>
                </div>
                <div class="card__proddetails">
                    <h3>${producto.name}</h3>
                    <p class="card__price">${producto.price}</p>
                    <p class="card__pay">Hasta 6 cuotas sin interés</p>
                    <a class="card__btn">Comprar</a>
                </div>
            </div>
        `;
    });
});