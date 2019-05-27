export class Product {
    id: number;
    name: string;
    image: any;
    price: number;
    categoryId: number;
    desc: string;
}

export class ProductProperties {
    __get() {
        return {
            id: 'number',
            name: 'string',
            image: 'any',
            price: 'number',
            categoryId: 'number',
            desc: 'string'
        };
    }
}
