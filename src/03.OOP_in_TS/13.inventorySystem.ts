class Product {
    private static _productCount: number = 0;
    readonly id: number
    private _name: string;
    private _price: number;

    constructor(name: string, price: number) {
        if (name.length < 1) {
            throw new Error("Name must contain at least 1 character");
        }
        if (price <= 0) {
            throw new Error("Price must be positive");
        }
        this._name = name;
        this._price = price;

        Product._productCount++;
        this.id = Product.productCount;

    }

    static get productCount(): number {
        return Product._productCount;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        if (value.length < 1) {
            throw new Error("Name must contain at least 1 character");
        }
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value <= 0) {
            throw new Error("Price must be positive");
        }
        this._price = value;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
    }

}

class Inventory {
    private readonly products: Product[];

    constructor() {
        this.products = [];
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
        const productLines = this.products.map(product => product.getDetails());
        const totalLine = `Total products created: ${Product.productCount}`;

        return [...productLines, totalLine].join('\n');

    }
}

const inventory = new Inventory();
const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);
inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());






