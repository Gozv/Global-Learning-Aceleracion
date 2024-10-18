/*
Pautas:
- Crea funciones para calcular el total de ventas, encontrar el producto más vendido y el vendedor del mes.
- Utiliza métodos de array como `reduce`, `map`, y `sort`.
*/

const salesData = [
    { date: "2024-03-01", product: "Laptop", amount: 1200, salesperson: "Alice" },
    { date: "2024-03-02", product: "Phone", amount: 800, salesperson: "Bob" },
    { date: "2024-03-02", product: "Laptop", amount: 1200, salesperson: "Alice" },
    { date: "2024-03-03", product: "Tablet", amount: 500, salesperson: "Charlie" },
    { date: "2024-03-04", product: "Phone", amount: 800, salesperson: "Bob" },
    { date: "2024-03-05", product: "Laptop", amount: 1200, salesperson: "Alice" }
];

  // 1. Función para calcular el total de ventas
function calculateTotalSales(data) {
    let totalSales = 0;
    data.forEach(sale => {
    totalSales += sale.amount;
    });
    return totalSales;
}

  // 2. Función para encontrar el producto más vendido
function findTopProduct(data) {
    const productSales = {};

    data.forEach(sale => {
    if (productSales[sale.product]) {
        productSales[sale.product] += sale.amount;
    } else {
        productSales[sale.product] = sale.amount;
    }
    });

    let topProduct = '';
    let maxSales = 0;

    for (let product in productSales) {
    if (productSales[product] > maxSales) {
        maxSales = productSales[product];
        topProduct = product;
    }
    }

    return { product: topProduct, totalAmount: maxSales };
}

  // 3. Función para determinar el vendedor del mes
function findTopSalesperson(data) {
    const salespersonSales = {};

    data.forEach(sale => {
    if (salespersonSales[sale.salesperson]) {
        salespersonSales[sale.salesperson] += sale.amount;
    } else {
        salespersonSales[sale.salesperson] = sale.amount;
    }
    });

    let topSalesperson = '';
    let maxSales = 0;

    for (let salesperson in salespersonSales) {
    if (salespersonSales[salesperson] > maxSales) {
        maxSales = salespersonSales[salesperson];
        topSalesperson = salesperson;
    }
    }

    return { salesperson: topSalesperson, totalAmount: maxSales };
}

  // Llamadas a las funciones
const totalSales = calculateTotalSales(salesData);
const topProduct = findTopProduct(salesData);
const topSalesperson = findTopSalesperson(salesData);

  // Resultados
console.log("Total de ventas:", totalSales);
console.log("Producto más vendido:", topProduct.product, "con un total de:", topProduct.totalAmount);
console.log("Vendedor del mes:", topSalesperson.salesperson, "con un total de:", topSalesperson.totalAmount);