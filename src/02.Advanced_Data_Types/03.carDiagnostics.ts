type CarBody = { material: string, state: string }
type Tires = { airPressure: number, condition: string }
type Engine = { horsepower: number, oilDensity: number }
type Diagnostics = { partName: string, runDiagnostics(): string }

function createCar(carBody: CarBody & Diagnostics, tires: Tires & Diagnostics, engine: Engine & Diagnostics) {
    return {
        carBody,
        tires,
        engine,
    }
}

createCar(
    {
        material: 'aluminum', state: 'scratched', partName: 'Car Body', runDiagnostics() {
            return this.partName
        }
    },
    {
        airPressure: 30, condition: 'needs change', partName: 'Tires', runDiagnostics() {
            return this.partName
        }
    },
    {
        horsepower: 300, oilDensity: 780, partName: 'Engine', runDiagnostics() {
            return this.partName
        }
    }
)