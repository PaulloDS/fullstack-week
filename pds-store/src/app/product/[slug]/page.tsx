import { prismaClient } from "@/lib/prisma"
import ProductsImages from "./components/products-images"
import ProductsInfo from "./components/products-info"
import { computeProductTotalPrice } from "@/helpers/product"
import ProductList from "@/components/ui/product-list"

interface ProductDetailsPage {
    params: {
        slug: string
    }
}

const ProductDetailsPage = async ({params: {slug}}: ProductDetailsPage ) => {
    const product = await prismaClient.product.findFirst({
        where: {
            slug: slug
        },
        include: {
            category: {
                include: {
                    products: {
                        where: {
                            slug: {
                                not: slug
                            }
                        }
                    }
                }
            }
        }
    })

    if (!product) return null;

    return (
        <div className="p-5 flex flex-col gap-8 pb-8">
            <ProductsImages imageUrls={product.imageUrls} name={product.name}/>
            <ProductsInfo product={computeProductTotalPrice(product)}/>
            <ProductList products={product.category.products}/>
        </div>
     );
}
 
export default ProductDetailsPage;