
import Image from "next/image"
import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Footer from "@/components/ui/footer";

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

  const headphones = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "headphones"
      }
    }
  })

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses"
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
      <PromoBanner src="/banner-home-02.png" alt="Até 55% de desconto em mouses!"/>

      <div className="mt-8">
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses}/>
      </div>

      <PromoBanner src="/banner-home-03.png" alt="Até 55% de desconto em mouses!"/>
      
      <div className="mt-8">
        <SectionTitle>Headphones</SectionTitle>
        <ProductList products={headphones}/>
      </div>
    </div>
  );
}
