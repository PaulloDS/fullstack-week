import { ProductWithTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import { ArrowDownIcon, Badge } from "lucide-react";
import Image from "next/image"

interface ProductItemProps {
    product: ProductWithTotalPrice
}

const ProductItem = ({product}: ProductItemProps) => {
    return ( 
        <div className="flex flex-col gap-4">
            <div className="relative bg-accent rounded-lg h-[170px] w-[156px] flex items-center justify-center">
                <Image src={product.imageUrls[0]} height={130} width={130} alt={product.name} style={{objectFit: "contain"}} className="max-w-[80%]"/>

                {product.discountPercentage > 0 && (
                <div className="absolute left-4 top-4 flex text-sm items-center bg-primary px-2 py-[2px] rounded-xl">
                    <ArrowDownIcon size={13}/> {product.discountPercentage}%
                </div>
            )}
            </div>

            <div className="flex flex-col gap-1">
                <p className="max-w-[95%] text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>

                <div className="flex items-center gap-2">
                    {product.discountPercentage > 0 ? (
                        <>
                            <p className="font-semibold">R$ {product.totalPrice.toFixed(2)}</p>
                            <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                        </>
                    ) : (
                        <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                    )}
                </div>
            </div>
        </div>
     );
}
 
export default ProductItem;