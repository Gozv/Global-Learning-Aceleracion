(() => {
    type Product = [number, string, number, number];

    function findProduct<T extends Product>(inventory: T[], id: number): string {
        const product = inventory.find((p) => p[0] === id);

        if (!product) {
            throw new Error('Producto no encontrado');
        }

        if (product[3] === 0) {
            return `El producto "${product[1]}" no tiene stock.`;
        }

        return `Producto: "${product[1]}", quedan ${product[3]} en stock.`;
    }

    const inventory: Product[] = [
        [1, "Camiseta", 19.99, 0],
        [2, "Pantalón", 39.99, 30],
        [3, "Zapatos", 59.99, 17], // Agotado
    ];

    try {
        console.log(findProduct(inventory, 1)); // "Producto: 'Camiseta', no tiene stock."
        console.log(findProduct(inventory, 2)); // "Producto: 'Pantalón', quedan 30 en stock."
        console.log(findProduct(inventory, 3)); // "Producto: 'Zapatos' quedan 17 en stock."
        console.log(findProduct(inventory, 4)); // Error "Producto no encontrado"
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error('Error desconocido', error);
        }
    }
})();