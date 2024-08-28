"use client";

import Image from "next/image"
import Logo from "../assets/FVRIA.png"
import { useEffect, useState } from "react";
export function Header() {

    return (
        <header className="backdrop-blur-md hidden sm:hidden md:hidden lg:flex fixed z-40 bg-transparent items-center w-full py-6">
            <div className="flex w-full items-center justify-center max-w-[1800px] px-[15px] mx-auto">
                <div>
                    <div className="flex gap-[580px]">
                        <Image src={Logo} alt="FURIA"/>
                        <div className=" flex">
                            <ul className="flex items-center gap-24">
                                <li >
                                    <button className="flex items-center gap-3 hover:bg-gray-400 p-2 hover:scale-105 shadow-lg transition-all duration-300 rounded-lg">
                                        <a href="#home"><span className="text-white underline">Home</span></a>
                                    </button>
                                </li>
                                <li >
                                    <button className="flex items-center gap-3 hover:bg-gray-400 p-2 hover:scale-105 shadow-lg transition-all duration-300 rounded-lg">
                                        <a href="#sobre"><span className="text-white underline">Sobre</span></a>
                                    </button>
                                </li>
                                <li >
                                    <button className="flex items-center gap-3 hover:bg-gray-400 p-2 hover:scale-105 shadow-lg transition-all duration-300 rounded-lg">
                                        <a href="#contact"><span className="text-white underline">Contato</span></a>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}