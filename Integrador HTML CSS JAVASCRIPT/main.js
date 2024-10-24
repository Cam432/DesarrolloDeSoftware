import { renderCategories } from "./src/services/categories.js";
import { handleSearchProductByName } from "./src/services/searchBar.js";
import { openModal } from "./src/views/modal.js";
import { handleGetProductsToStore } from "./src/views/store.js";

export let categoriaActiva = null;

export const setCategoriaActiva = (categoryIn) => {
        categoriaActiva = categoryIn;
    }

export let productoActivo = null;

    export const setProductoActivo = (categoryIn) => {
        categoriaActiva = categoryIn;
    }

document.addEventListener('DOMContentLoaded', () => {

    // Iniciar la aplicación
    handleGetProductsToStore();
    renderCategories();
})

const buttonAdd = document.getElementById("buttonAddElement");

if (buttonAdd) {
    buttonAdd.addEventListener('click', () => {
        openModal();
    });
}

// boton buscar
const buttonSearch = document.getElementById("buttonSearch");
buttonSearch.addEventListener('click', () => {
    handleSearchProductByName();
})
