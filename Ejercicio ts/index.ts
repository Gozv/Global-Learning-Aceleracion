interface Contribuyente {
    nombre: string;
    ingresoAnual: number;
    gastos: number[];
}

class CalculadoraImpuestos {
    private tasaBase: number = 0.15;

    obtenerImpuesto(contribuyente: Contribuyente): number {
    const totalGastos = contribuyente.gastos.reduce((acumulado, gasto) => acumulado + gasto, 0);
    const ingresoImponible = contribuyente.ingresoAnual - totalGastos;
      const impuesto = ingresoImponible * this.tasaBase;
    return impuesto > 0 ? impuesto : 0;
    }

    aplicarDescuento(contribuyente: Contribuyente, descuento: number): Contribuyente {
    return {
        ...contribuyente,
        ingresoAnual: contribuyente.ingresoAnual - descuento
    };
    }

    generarResumen(contribuyentes: Contribuyente[]): string {
    let resumen = "Resumen de Impuestos:\n";
    contribuyentes.forEach((contribuyente) => {
        const impuesto = this.obtenerImpuesto(contribuyente);
        resumen += `Nombre: ${contribuyente.nombre}, Impuesto a Pagar: $${impuesto.toFixed(2)}\n`;
    });
    return resumen;
    }
}

  // Ejemplo de uso
const contribuyentes: Contribuyente[] = [
    { nombre: "Ana", ingresoAnual: 48000, gastos: [1200, 1800, 2500] },
    { nombre: "Bruno", ingresoAnual: 72000, gastos: [4000, 1800] },
    { nombre: "Carla", ingresoAnual: 61000, gastos: [1600, 2600, 1200] }
];

const calculadora = new CalculadoraImpuestos();
console.log("\nGenerando resumen para todos los contribuyentes:");
console.log(calculadora.generarResumen(contribuyentes));