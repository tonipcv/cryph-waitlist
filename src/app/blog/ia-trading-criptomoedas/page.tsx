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
            <span className="text-gray-400 text-sm">15 Janeiro, 2024</span>
            <h1 className="text-3xl font-light mt-2 mb-4">
              Como a IA está Revolucionando o Trading de Criptomoedas
            </h1>
          </div>

          {/* Article content */}
          <div className="prose prose-invert max-w-none">
            {/* Add your article content here */}
            <p>
              A inteligência artificial tem transformado significativamente o mercado de criptomoedas...
            </p>
          </div>
        </article>

        {/* Footer navigation */}
        <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-white/10">
          <div className="flex justify-between">
            <Link 
              href="/blog/analise-tecnica-vs-ia"
              className="text-gray-400 hover:text-white"
            >
              ← Artigo Anterior
            </Link>
            <Link 
              href="/blog/estrategias-gestao-portfolio"
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