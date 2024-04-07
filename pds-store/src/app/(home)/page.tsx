"use client"

import Image from "next/image"
import Categories from "./components/categories";

export default function Home() {

  return (
    <div className="p-5">
      <Image className="w-full h-auto" src='/banner-home-01.png' width={0} height={0} alt="Até 55% de desconto só esse mês" sizes="100vw"/>

      <div className="mt-8">
          <Categories/>
      </div>
    </div>
  );
}
