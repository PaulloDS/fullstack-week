"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/discount-badge";
import { ProductWithTotalPrice } from "@/helpers/product";
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { useState } from "react";

interface ProductsInfoProps {
    product: Pick<
        ProductWithTotalPrice,
        "name" |
        "basePrice" |
        "description" |
        "discountPercentage" |
        "totalPrice"
    >
}

const ProductsInfo = ({product: {name, basePrice, totalPrice, description, discountPercentage}}: ProductsInfoProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecreaseQuantityClick = () => {
        setQuantity((prev) => (prev === 1 ? prev: prev - 1))
    }

    const handleIncreaseQuantityClick = () => {
        setQuantity((prev) => prev  + 1)
    }

    return ( 
        <div className="flex flex-col px-5">
            <h2 className="text-lg">{name}</h2>

            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">R$ {totalPrice.toFixed(2)}</h1>
                {discountPercentage > 0 && (
                    <DiscountBadge>
                        {discountPercentage}
                    </DiscountBadge>
                )}
            </div>
            {discountPercentage > 0 && (
                <p className="opacity-75 line-through text-sm">R$ {Number(basePrice).toFixed(2)}</p>
            )}

            <div className="flex items-center gap-3 mt-4">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16}/>
                </Button>

                <span>{quantity}</span>

                <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>

            <div className="flex flex-col gap-3 mt-8">
                <h3 className="font-bold">Descrição do produto</h3>
                <p className="text-sm opacity-60 text-justify">{description}</p>
            </div>

            <Button className="uppercase mt-8 font-bold">
                Adicionar ao Carrinho
            </Button>

            <div className="bg-accent flex items-center px-5 py-2 justify-between mt-4 rounded-lg">
                <div className="flex items-center gap-3">
                    <TruckIcon/>
                    <div>
                        <p className="text-xs">Entrega via <span className="font-bold">PDPacket</span></p>
                        <p className="text-xs text-primary">Envio para <span className="font-bold">todo Brasil</span></p>
                    </div>
                </div>
                
                <p className="font-bold">Frete Grátis</p>
            </div>
        </div>
     );
}
 
export default ProductsInfo;