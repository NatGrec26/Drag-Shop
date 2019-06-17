import { Picture } from './picture.interface';
export interface Product {
    name: string;
    productID: number;
    description: string;
    pictures: Picture[];
  }
