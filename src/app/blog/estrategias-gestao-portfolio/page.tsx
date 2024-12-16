"use client";

import Link from "next/link";
import { ArrowLeft, Twitter, Github, Globe } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-black text-white font-light">
      {/* Header fixo com fundo blur */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Home
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6">
        <article className="max-w-3xl mx-auto pt-24">
          {/* Cabeçalho do artigo */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-sm text-gray-400">10 Janeiro, 2024</span>
              <span className="text-gray-600">•</span>
              <span className="text-sm text-gray-400">6 min de leitura</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">
              5 Estratégias Essenciais para Gestão de Portfolio Cripto
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Descubra as estratégias fundamentais que todo investidor deveria conhecer para 
              maximizar retornos e minimizar riscos no mercado de criptomoedas.
            </p>
          </div>

          {/* Conteúdo do artigo */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-light mb-4">1. Diversificação Inteligente</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A diversificação é mais do que simplesmente distribuir investimentos. No mercado cripto, 
                  é essencial entender as correlações entre diferentes ativos e como eles se comportam em 
                  diferentes cenários de mercado.
                </p>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-light mb-4">Aspectos Chave da Diversificação:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Distribuição entre diferentes categorias de tokens
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Balanceamento entre projetos estabelecidos e emergentes
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Consideração de correlações de mercado
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">2. Gestão de Risco Avançada</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A gestão de risco é crucial no mercado cripto. Implementar stop-losses, 
                  definir limites de exposição e manter uma reserva estratégica são práticas essenciais.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-light mb-3">Stop-Loss Dinâmico</h3>
                    <p className="text-gray-400">
                      Ajuste automático baseado na volatilidade do mercado.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-light mb-3">Limites de Exposição</h3>
                    <p className="text-gray-400">
                      Definição clara de limites por ativo e categoria.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">3. Rebalanceamento Automático</h2>
                <p className="text-gray-300 leading-relaxed">
                  O rebalanceamento regular do portfolio é essencial para manter a estratégia alinhada 
                  com seus objetivos. A automação deste processo remove o viés emocional e garante 
                  disciplina na execução.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-light mb-4">Otimize seu Portfolio com IA</h3>
                <p className="text-gray-300 mb-6">
                  A CRYPH oferece ferramentas avançadas de gestão de portfolio com inteligência artificial. 
                  Maximize seus resultados com rebalanceamento automático e análise preditiva.
                </p>
                <a 
                  href="http://app.cryph.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm transition-colors"
                >
                  Começar Gratuitamente
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 sm:py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/#features" className="hover:text-white">Recursos</a></li>
                <li><a href="/#pricing" className="hover:text-white">Preços</a></li>
                <li><a href="/#demo" className="hover:text-white">Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/#about" className="hover:text-white">Sobre</a></li>
                <li><a href="/#blog" className="hover:text-white">Blog</a></li>
                <li><a href="/#careers" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/#privacy" className="hover:text-white">Privacidade</a></li>
                <li><a href="/#terms" className="hover:text-white">Termos</a></li>
                <li><a href="/#security" className="hover:text-white">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 mt-8 pt-8 text-center text-gray-400 text-xs">
            <p>&copy; 2024 CRYPH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 