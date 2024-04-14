import { CarIcon, ShapesIcon, ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
import { CartContext } from "@/providers/cart";
import { useContext } from "react";

const Cart = () => {
    const {products} = useContext(CartContext);
    return ( 
        <div>
            <Badge className="gap-2 w-fit text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
                <ShoppingCartIcon size={16}/>
                Carrinho
            </Badge>

            {products.map(product => <h1 key={product.name}>{product.name}</h1>)}
        </div>
     );
}
 
export default Cart;