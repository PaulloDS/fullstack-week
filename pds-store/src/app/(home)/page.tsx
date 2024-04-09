
import Image from "next/image"
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })
  return (
    <div>
      <Image className="w-full h-auto px-5 mt-8" src='/banner-home-01.png' width={0} height={0} alt="Até 55% de desconto só esse mês" sizes="100vw"/>

      <div className="mt-8 px-5">
          <Categories/>
      </div>
      <div className="mt-8">
        <p className="font-bold uppercase pl-5 mb-3">Ofertas</p>
        <ProductList products={deals}/>
      </div>

      <Image className="w-full h-auto px-5 mt-8" src='/banner-home-02.png' width={0} height={0} alt="Até 55% de desconto em mouses!" sizes="100vw"/>
    </div>
  );
}
