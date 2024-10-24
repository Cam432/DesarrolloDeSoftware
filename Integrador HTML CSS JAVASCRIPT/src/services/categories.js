//render de la vista categorias

import { categoriaActiva } from "../../main.js";
import { handleGetProductLocalStorage } from "../persistence/localStorage.js";
import { handleRenderList } from "../views/store.js";

const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products);
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=> el.categoria === categoryIn);
            handleRenderList(result);
            break;
        case "mayorPrecio":
            const resultPrecioMayor = products.sort((a,b) => b.precio - a.precio)
            handleRenderList(resultPrecioMayor);
            break;
        case "menorPrecio":
            const resultPrecioMenor = products.sort((a,b) => a.precio - b.precio)
            handleRenderList(resultPrecioMenor);
            break;
        default:
            break;
    }
}

export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo"> Todos los productos </li>
    <li id="Hamburguesas"> Hamburguesas </li>
    <li id="Papas"> Papas </li>
    <li id="Gaseosas"> Gaseosas </li>
    <li id="mayorPrecio"> Mayor Precio </li>
    <li id="menorPrecio"> Menor Precio </li>
    `;
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) =>{
        liElement.addEventListener("click", () =>{
            console.log("click en ", liElement.id);
            handleClick(liElement);
        });
    });

    const handleClick = (elemento) =>{
        handleFilterProductsByCategory(elemento.id);
        liElements.forEach((el) =>{
            el.classList.remove("liActive");
        });
        elemento.classList.add("liActive");
    }
}
