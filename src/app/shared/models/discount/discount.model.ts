export interface IDiscount {
    id?: number;
    title: string;
    text: string;
    image: string;
}

export class Discount implements IDiscount {
    constructor (
        public title: string,
        public text: string,
        public image: string,
    ) { }
}