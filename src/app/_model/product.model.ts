import { Image } from "./image.model";

export class Product {
    id: number = 0;
    name: string = "";
    image: string = "";
    categories: string = "";
    description: string = "";
    buyingPricePerUnit: number = 0;
    sellingPricePerUnit: number = 0;
    discountPrice: number = 0;
    discountTitle: string = "";
    unit: number = 1;
    unitTitle: string = "";
    quantity: number =0;
    active: boolean = true;
    deleted: boolean = false;
    updatedAt: string = "";
    createdAt: string = "";
    productImages: Image[] = null;
}
