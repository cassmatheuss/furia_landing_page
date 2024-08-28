import BackgroundFuria from "@/assets/Background Furia.svg";
import Image from "next/image";
import SomosFuria from "@/assets/somos_furia.svg"
export function Hero() {
  return (
    <div id="home" className="flex items-center justify-center w-screen h-[926px] relative bg-black">
      <div className="flex justify-center absolute inset-0">
        <Image
          src={BackgroundFuria}
          alt="Furia Background"
          className="z-0 bg-cover"
        />
      </div>
      <div className="grid px-6 sm:px-0 place-items-center z-10 w-[800px] pb-48">
      <Image
          src={SomosFuria}
          alt="Furia Background"
        />
        <h1 className="text-white text-2xl font-light tracking-wide">
            Uma organização de esports que nasceu do desejo de representar o Brasil no CS e conquistou muito mais que isso: 
            expandimos nossas ligas, disputamos os principais títulos, adotamos novos objetivos eganhamos um propósito maior. 
            Somos muito mais que o sucesso competitivo. Somos um movimento sociocultural.
        </h1>
      </div>
    </div>
  );
}
