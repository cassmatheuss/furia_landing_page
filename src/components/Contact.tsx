"use client";

import logocontact from "@/assets/LogoContact.png";
import Image from "next/image";
import tornese from "@/assets/TextBox.png";

export function Contact() {
  const enviar = (e: any) => {
    e.preventDefault();
    alert("Apenas de demonstração!");
  };
  return (
    <main
      id="contact"
      className="flex items-center sm:flex-row flex-col justify-center w-full h-[926px] relative overflow-hidden bg-black"
    >
      <div className="z-10 sm:w-[600px] w-full px-6 py-6 pb-[0px]">
        <Image
          src={tornese}
          alt="Tornese Background"
          className="pb-6 drop-shadow"
        />
        <form className="flex flex-col gap-6 left-0 z-10" onSubmit={enviar}>
          <input
            type="text"
            placeholder="Nome"
            className="p-2 rounded border border-gray-300"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-2 rounded border border-gray-300"
          />
          <textarea
            placeholder="Mensagem"
            className="p-2 rounded border border-gray-300 h-80 resize-none"
          />
          <button
            type="submit"
            className="self-end px-6 py-2 rounded bg-gray-300 text-white font-semibold hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </form>
      </div>
      <div className="sm:pl-40 z-10">
        <Image src={logocontact} alt="Contact Logo" className="w-auto h-auto hidden lg:block" />
      </div>
    </main>
  );
}
