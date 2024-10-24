// local storage 

// Obtener productos de localStorage
export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem('products'));
    return products ? products : [];
};

// Guardar o modificar elementos en localStorage
export const setInLocalStorage = (productIn) => {
    let productsInLocal = handleGetProductLocalStorage();
    const existingIndex = productsInLocal.findIndex(
        (productsLocal) => productsLocal.id === productIn.id
    );

    // Verificar si el elemento ya existe
    if (existingIndex !== -1) {
        // Si existe, debe reemplazarse
        productsInLocal[existingIndex] = productIn;
    } else {
        // Si no existe, debe agregarse
        productsInLocal.push(productIn);
    }

    // Actualizar el localStorage
    localStorage.setItem("products", JSON.stringify(productsInLocal));
};
