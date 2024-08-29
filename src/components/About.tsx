"use client";

import Fallen from "@/assets/fallen.webp";
import Image from "next/image";
import Sobre from "@/assets/Sobre.svg"
export function About() {

  return (
    <main id="sobre" className="overflow-hidden flex items-center justify-center w-full h-[926px] relative overflow-y-auto bg-black">
      <div className="px-6 grid lg:pl-40 z-10 w-[1000px] pt-4">
      <Image
          src={Sobre}
          alt="Furia Background"
          className="pb-6 drop-shadow grid"
        />
        <h1 className="text-sm backdrop-blur-sm text-white sm:text-2xl font-light tracking-wide max-w-[600px]">
        Nossa história é de pioneirismo, grandes conquistas e tradição. Nosso presente é de 
        desejo, garra e estratégia. A pantera estampada no peito estampa também nosso futuro de glória. Nossos pilares de performance, lifestyle, conteúdo, 
        business, tecnologia e social são os principais constituintes do movimento FURIA, que representa uma unidade que respeita as individualidades e impacta 
        positivamente os contextos em que se insere. Unimos pessoas e alimentamos sonhos dentro e fora dos jogos.
        </h1>
        <div className="flex justify-center absolute h-full items-center">
        <Image
            src={Fallen}
            alt="Furia Background"
            className="-z-10 sm:hidden object-cover bg-cover"
          />
      </div>
      </div>
       
      <div>
        
          <Image
            src={Fallen}
            alt="Furia Background"
            className="z-0 bg-cover sm:flex hidden lg:block "
          />

      </div>
      
      
    </main>
  );
}
