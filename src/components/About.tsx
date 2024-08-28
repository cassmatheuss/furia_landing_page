"use client";

import Fallen from "@/assets/fallen.webp";
import Image from "next/image";
import Sobre from "@/assets/Sobre.svg"
import { useEffect, useState } from "react";
export function About() {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
    
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  return (
    <main id="sobre" className="flex items-center justify-center w-full h-[926px] relative overflow-y-auto bg-black">
      <div className="px-6 grid lg:pl-40 z-10 w-[1000px] pt-4">
      <Image
          src={Sobre}
          alt="Furia Background"
          className="pb-6 drop-shadow grid"
        />
        <h1 className="backdrop-blur-sm text-white text-2xl font-light tracking-wide max-w-[600px]">
        Nossa história é de pioneirismo, grandes conquistas e tradição. Nosso presente é de 
        desejo, garra e estratégia. A pantera estampada no peito estampa também nosso futuro de glória. Nossos pilares de performance, lifestyle, conteúdo, 
        business, tecnologia e social são os principais constituintes do movimento FURIA, que representa uma unidade que respeita as individualidades e impacta 
        positivamente os contextos em que se insere. Unimos pessoas e alimentamos sonhos dentro e fora dos jogos.
        </h1>
        {windowSize.width < 640 && (<div className="flex justify-center absolute h-full items-center">
        <Image
            src={Fallen}
            alt="Furia Background"
            className="-z-10 object-cover bg-cover"
          />
      </div>)}
      </div>
      {windowSize.width >= 640 && (
      <div>
        
          <Image
            src={Fallen}
            alt="Furia Background"
            className="z-0 bg-cover"
          />

      </div>
      )}
      
    </main>
  );
}
