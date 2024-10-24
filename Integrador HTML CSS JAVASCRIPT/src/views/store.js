import { handleGetProductLocalStorage } from "../persistence/localStorage.js";
import { openModal } from "./modal.js";

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage(); 
    handleRenderList(products);
};

export const handleRenderList = (productsIn) => {
    const burgers = productsIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productsIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productsIn.filter((el) => el.categoria === "Gaseosas");

    const renderProductGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `<div class='containerTargetItem' id='product-${producto.categoria}-${index}' data-id='${producto.id}'>
                    <div>
                        <img src='${producto.imagen}' alt='${producto.nombre}'/>
                        <div>
                            <h2>${producto.nombre}</h2>
                        </div>
                        <div class='targetProps'>
                            <p><b>Precio: </b> $${producto.precio}</p>
                        </div>
                    </div>
                </div>`;
            }).join(""); 
            
            return `
                <section class='sectionStore'>
                    <div class='containerTitleSection'>
                        <h3>${title}</h3>
                    </div>
                    <div class='containerProductStore'>
                        ${productosHTML}
                    </div>
                </section>`;
        } else {
            return "";
        }
    };

    // Renderizar cada uno de los productos dentro de su categoría
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, "Hamburguesas")}
        ${renderProductGroup(papas, "Papas")}
        ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productos) => {
        productos.forEach((element, index) => {
            const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
            if (productContainer) {
                productContainer.addEventListener('click', () => {
                    handleProductClick(element); 
                });
            }
        });
    };

    addEvents(burgers);
    addEvents(papas);
    addEvents(gaseosas);
};

// clic en un producto
const handleProductClick = (product) => {
    console.log("productoActivo", product);
    
    // Llenar el formulario del modal con los datos del producto
    document.getElementById("nombre").value = product.nombre;
    document.getElementById("img").value = product.imagen;
    document.getElementById("precio").value = product.precio;
    document.getElementById("categoria").value = product.categoria;
    
    openModal();
};
