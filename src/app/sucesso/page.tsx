"use client";

import Image from "next/image";
import { Award } from 'lucide-react';

export default function Sucesso() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto p-6">
        <Image
          src="/logo1.png"
          alt="CRYPH"
          width={120}
          height={36}
          className="h-9 w-auto mx-auto mb-12"
          priority
        />
        
        <div className="text-center mb-16">
          <h1 className="text-2xl font-light mb-4">
            Infelizmente as vagas para o CRYPH estão encerradas.
          </h1>
          
          <p className="text-gray-400 text-lg">
            O servidor da IA só suporta poucos usuários.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8 mb-12 border border-zinc-800">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                Para ajudar você começar no mercado preparamos uma <span className="text-white font-medium">Imersão AO VIVO</span> para falar sobre 3 ativos que vão subir mais de 10x no próximo mês.
              </p>

              <p className="text-gray-300">
                Esse ativo está sendo visto por poucos.
              </p>
            </div>

            <div className="space-y-2 text-gray-300">
              <p>Também quero disponibilizar um Curso do Zero ao Avançado para você.</p>
              <p>Iremos cobrar somente o Ingresso baseado no servidor.</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8">
          <div>
            <p className="text-2xl font-light mb-2">Valor do Investimento</p>
            <p className="text-3xl font-light">R$ 47</p>
            <p className="text-sm text-gray-500 mt-2">Destinado somente para estrutura do encontro</p>
          </div>

          <div>
            <a 
              href="https://pay.hotmart.com/B98993169P?off=kzqja9y1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full max-w-md bg-white text-black font-medium rounded-lg px-8 py-4 text-lg hover:bg-gray-100 transition-all"
            >
              Garantir minha vaga
            </a>
            
            <p className="text-xs text-gray-500 mt-4">
              Vagas limitadas - Oferta por tempo limitado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
