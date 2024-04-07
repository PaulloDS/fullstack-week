"use client"

import Image from "next/image"

export default function Home() {

  return (
    <div className="p-5">
      <Image className="w-full h-auto" src='/banner-home-01.png' width={0} height={0} alt="Até 55% de desconto só esse mês" sizes="100vw"/>
    </div>
  );
}
