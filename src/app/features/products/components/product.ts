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

export class ProductEnv {
    dataURL = 'https://my-json-server.typicode.com/mark-mendiola/mystore/products';
}
