import { ICategory } from "../category/category.model";

export interface IProduct {
    category: ICategory;
    name: string;
    path: string;
    description: string;
    weight: string;
    price: number;
    image: string;
    count: number;
    id?: number;
}