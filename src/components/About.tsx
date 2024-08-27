import Fallen from "@/assets/fallen.webp";
import Image from "next/image";
import Sobre from "@/assets/Sobre.svg"
export function About() {
  return (
    <main id="sobre" className="flex items-center justify-center w-full h-[926px] relative overflow-hidden bg-black">
      <div className="flex justify-end absolute inset-0 top-20">
        <Image
          src={Fallen}
          alt="Furia Background"
          className="z-0 bg-cover w-auto h-auto"
        />
      </div>
      <div className="grid place-items-start z-10 w-[1000px] pt-4">
      <Image
          src={Sobre}
          alt="Furia Background"
          className="pb-6 drop-shadow"
        />
        <h1 className="text-white text-2xl font-light tracking-wide max-w-[600px]">
        Nossa história é de pioneirismo, grandes conquistas e tradição. Nosso presente é de 
        desejo, garra e estratégia. A pantera estampada no peito estampa também nosso futuro de glória. Nossos pilares de performance, lifestyle, conteúdo, 
        business, tecnologia e social são os principais constituintes do movimento FURIA, que representa uma unidade que respeita as individualidades e impacta 
        positivamente os contextos em que se insere. Unimos pessoas e alimentamos sonhos dentro e fora dos jogos.
        </h1>
      </div>
    </main>
  );
}
