import { prismaClient } from "@/lib/prisma"
import ProductsImages from "./components/products-images"

interface ProductDetailsPage {
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsPage ) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        }
    })

    if (!product) return null;

    return (
        <div className="p-5">
            <ProductsImages imageUrls={product.imageUrls} name={product.name}/>
        </div>
     );
}
 
export default ProductDetailsPage;