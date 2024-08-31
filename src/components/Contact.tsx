"use client";
import logocontact from "@/assets/LogoContact.png";
import Image from "next/image";
import tornese from "@/assets/TextBox.png";
import { useState } from "react";
import axios from 'axios';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  message: z.string().min(1, "Mensagem é obrigatória"),
});

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<any>({});

  const enviar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      contactSchema.parse({ name, email, message });
      
      await axios.post('https://back-end-furia.onrender.com/emails', { name, email, message });
      alert("Dados enviados! Obrigado.");

    } catch (err) {
      if (err instanceof z.ZodError) {
        const formattedErrors = err.errors.reduce((acc: any, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      }
    }
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
            className={`p-2 rounded border ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="text"
            placeholder="Email"
            className={`p-2 rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <textarea
            placeholder="Mensagem"
            className={`p-2 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} h-80 resize-none`}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

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
