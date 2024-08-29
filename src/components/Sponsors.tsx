import Image, { StaticImageData } from "next/image";

interface SponsorProps {
    image1: StaticImageData,
    image2: StaticImageData,
    image3: StaticImageData,

}

export function Sponsors({image1, image2, image3}: SponsorProps) {
  return (
    <div className="flex sm:flex-row flex-col items-center justify-center gap-24 bg-white max-w-full h-full sm:h-56">
        
            <Image src={image1} alt="Patrocinador 1"/>
            <Image src={image2} alt="Patrocinador 2"/>
            <Image src={image3} alt="Patrocinador 3"/>
            <br/>
            
    </div>
  );
}
