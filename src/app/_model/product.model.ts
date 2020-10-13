import { Image } from "./image.model";

export class Product {
    id: number
    name: string
    image: File
    categories: string
    description: string
    buyingPricePerUnit: number
    sellingPricePerUnit: number
    discountPrice: number
    discountTitle: string
    unit: number
    unitTitle: string
    quantity: number
    active: boolean
    deleted: boolean
    updatedAt: string
    createdAt: string
    productImages: Image[]
}
