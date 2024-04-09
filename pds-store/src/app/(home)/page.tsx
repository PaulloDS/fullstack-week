
import Image from "next/image"
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "./components/product-list";
import SectionTitle from "./components/section-title";
import PromoBanner from "./components/promo-banner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0
      }
    }
  })

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards"
      }
    }
  })
  return (
    <div>
      <PromoBanner src="/banner-home-01.png" alt="Até 55% de desconto só esse mês!"/>

      <div className="mt-8 px-5">
          <Categories/>
      </div>
      <div className="mt-8">
      <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals}/>
      </div>

      <Image className="w-full h-auto px-5 mt-8" src='/banner-home-02.png' width={0} height={0} alt="Até 55% de desconto em mouses!" sizes="100vw"/>

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards}/>
      </div>
    </div>
  );
}
