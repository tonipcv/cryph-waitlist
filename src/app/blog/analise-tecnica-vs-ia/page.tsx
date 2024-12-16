"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            <span className="text-gray-400 text-sm">5 Janeiro, 2024</span>
            <h1 className="text-3xl font-light mt-2 mb-4">
              Análise Técnica vs IA: O Futuro do Trading
            </h1>
          </div>

          {/* Article content */}
          <div className="prose prose-invert max-w-none">
            {/* Add your article content here */}
            <p>
              Com o avanço da tecnologia, surge um debate importante: análise técnica tradicional 
              ou inteligência artificial? Analisamos as vantagens e desvantagens de cada abordagem 
              e como elas podem trabalhar em conjunto...
            </p>
          </div>
        </article>

        {/* Footer navigation */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="flex justify-between">
            <Link 
              href="/blog/estrategias-gestao-portfolio"
              className="text-gray-400 hover:text-white"
            >
              ← Artigo Anterior
            </Link>
            <Link 
              href="/blog/ia-trading-criptomoedas"
              className="text-gray-400 hover:text-white"
            >
              Próximo Artigo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 