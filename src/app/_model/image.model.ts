import { Product } from "./product.model";

export class Image {
    active: boolean
    createdAt: string
    deleted: boolean
    id: number
    name: string
    product: Product
    size: number
    type: string
    updatedAt: string
    url: string
}
