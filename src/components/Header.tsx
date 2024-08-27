import Image from "next/image"
import Logo from "../assets/FVRIA.png"
export function Header() {
    return (
        <header className="flex items-center w-full bg-black py-6">
            <div className="flex w-full max-w-[1800px] px-[15px] mx-auto">
                <div>
                    <div className="flex items-center gap-[580px]">
                        <Image src={Logo} alt="FURIA"/>
                        <ul className="flex items-center gap-24">
                            <li >
                                <button className="flex items-center gap-3">
                                    <a href="#home"><span className="text-white underline">Home</span></a>
                                </button>
                            </li>
                            <li >
                                <button className="flex items-center gap-3">
                                    <a href="#sobre"><span className="text-white underline">Sobre</span></a>
                                </button>
                            </li>
                            <li >
                                <button className="flex items-center gap-3">
                                    <a href="#contact"><span className="text-white underline">Contato</span></a>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}