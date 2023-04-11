export interface uiPrice {
    size: string;
    price: number;
}

export class Product {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public price: number,
        public likes: string,
        public isLiked: boolean,
        public uiPrice: Array<uiPrice>,
        public dateAdded: Date)
        {}
}
