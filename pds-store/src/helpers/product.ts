import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export interface ProductWithTotalPrice extends Product {
    totalPrice: number;
}

export const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
    const basePriceNumber = (product.basePrice as Decimal).toNumber();
    const totalPrice = product.discountPercentage === 0 ?
        basePriceNumber :
        basePriceNumber - (basePriceNumber * product.discountPercentage) / 100;

    return {
        ...product,
        totalPrice: Number(totalPrice)
    };
}