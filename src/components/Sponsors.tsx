import Image, { StaticImageData } from "next/image";

interface SponsorProps {
    image1: StaticImageData,
    image2: StaticImageData,
    image3: StaticImageData,

}

export function Sponsors({image1, image2, image3}: SponsorProps) {
  return (
    <div className="flex items-center justify-center bg-white w-full h-56">
        <div className="w-[1120px] h-[300px] flex items-center justify-center gap-24">
            <Image src={image1} alt="Patrocinador 1"/>
            <Image src={image2} alt="Patrocinador 2"/>
            <Image src={image3} alt="Patrocinador 3"/>
        </div>
    </div>
  );
}
