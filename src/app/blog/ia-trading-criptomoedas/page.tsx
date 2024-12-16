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
              <span className="text-sm text-gray-400">15 Janeiro, 2024</span>
              <span className="text-gray-600">•</span>
              <span className="text-sm text-gray-400">8 min de leitura</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">
              Como a IA está Revolucionando o Trading de Criptomoedas
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Descubra como a inteligência artificial está transformando o mercado de criptomoedas 
              e permitindo que traders tomem decisões mais precisas.
            </p>
          </div>

          {/* Conteúdo do artigo */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-light mb-4">O Poder da Análise Preditiva</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A análise preditiva baseada em IA permite que traders identifiquem oportunidades de mercado 
                  antes que elas se tornem evidentes para a maioria dos participantes. Utilizando grandes volumes 
                  de dados históricos, a IA pode processar e analisar informações em uma escala impossível para 
                  analistas humanos.
                </p>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-light mb-4">Principais Capacidades da IA:</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Identificação de padrões de preço complexos em múltiplos timeframes
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Análise de sentimento do mercado através de dados das redes sociais
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Previsão de tendências baseada em centenas de variáveis
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Otimização automática de estratégias de trading
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">Benefícios do Trading com IA</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A implementação de sistemas de IA no trading de criptomoedas oferece uma série de 
                  vantagens significativas que podem melhorar drasticamente seus resultados.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-light mb-3">Análise 24/7</h3>
                    <p className="text-gray-400">
                      Monitoramento constante do mercado, identificando oportunidades a qualquer momento.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <h3 className="text-lg font-light mb-3">Decisões Sem Emoção</h3>
                    <p className="text-gray-400">
                      Eliminação do viés emocional nas decisões de trading.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">O Futuro do Trading</h2>
                <p className="text-gray-300 leading-relaxed">
                  À medida que a tecnologia continua evoluindo, esperamos ver ainda mais inovações na 
                  aplicação de IA no trading de criptomoedas. Sistemas mais sofisticados de machine learning 
                  e deep learning prometem revolucionar ainda mais a forma como operamos no mercado.
                </p>
              </section>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 my-12">
                <h3 className="text-2xl font-light mb-4">Comece a Usar IA no seu Trading</h3>
                <p className="text-gray-300 mb-6">
                  Experimente o poder da inteligência artificial no trading de criptomoedas com a CRYPH. 
                  Nossa plataforma oferece análises avançadas e insights em tempo real para maximizar 
                  seus resultados.
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