/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  TrendingUp, 
  BrainCog, 
  Bell, 
  Wallet, 
  ArrowUpRight, 
  Shield,
  Github,
  Twitter,
  Globe,
  Menu,
  X
} from "lucide-react";
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-light">
      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo1.png"
                alt="CRYPH"
                width={80}
                height={24}
                className="h-6 w-auto sm:h-8"
                priority
              />
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Recursos</Link>
              <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">Como Funciona</Link>
              <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Preços</Link>
              <a 
                href="http://app.cryph.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:bg-white/5 px-6 py-2 rounded-full text-sm transition-colors"
              >
                Começar
              </a>
            </div>

            {/* Botão Menu Mobile */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-lg border-t border-zinc-800">
              <div className="flex flex-col space-y-4 p-6">
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors text-sm py-2">Recursos</Link>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm py-2">Como Funciona</Link>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm py-2">Preços</Link>
                <a 
                  href="http://app.cryph.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-zinc-800 hover:bg-zinc-800 px-6 py-3 rounded-full text-sm transition-colors text-center"
                >
                  Começar
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16">
            <div className="lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-wide">
                Domine o Mercado Cripto com
                <span className="bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text"> Inteligência Artificial</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 font-light">
                Nossa IA analisa o mercado 24/7 para você nunca perder uma oportunidade.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="http://app.cryph.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-400 text-zinc-900 hover:opacity-90 rounded-full text-sm transition-all group"
                >
                  Começar Gratuitamente
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between sm:justify-start sm:gap-12 pt-8 px-4 sm:px-0">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-light bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">98%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Precisão</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-zinc-800"></div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-light bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">24/7</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Análise</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-zinc-800"></div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-light bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">500+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Usuários</div>
                </div>
              </div>
            </div>

            {/* Visual Section */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden border border-zinc-800">
                {/* Fundo mais escuro */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900"></div>
                
                {/* Grade mais sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                {/* Elementos flutuantes */}
                <div className="absolute top-1/4 left-1/4 bg-zinc-900/80 backdrop-blur-sm rounded-lg p-4 border border-zinc-800 transform -rotate-6 shadow-lg">
                  <TrendingUp className="w-6 h-6 text-gray-400" />
                  <div className="text-sm mt-2 text-gray-400">+245%</div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 bg-zinc-900/80 backdrop-blur-sm rounded-lg p-4 border border-zinc-800 transform rotate-6 shadow-lg">
                  <BrainCog className="w-6 h-6 text-gray-400" />
                  <div className="text-sm mt-2 text-gray-400">IA Ativa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-12 sm:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 tracking-wide">Recursos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Tecnologia de ponta para maximizar seus resultados.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cards */}
            <div className="p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors backdrop-blur-sm bg-zinc-900/50 shadow-lg">
              <BrainCog className="w-6 h-6 mb-6 text-gray-400" />
              <h3 className="text-lg font-light mb-4">IA Preditiva</h3>
              <p className="text-gray-400 text-sm">
                Algoritmos avançados que analisam padrões de mercado e preveem tendências.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors backdrop-blur-sm bg-zinc-900/50 shadow-lg">
              <Bell className="w-6 h-6 mb-6 text-gray-400" />
              <h3 className="text-lg font-light mb-4">Alertas Smart</h3>
              <p className="text-gray-400 text-sm">
                Notificações personalizadas em tempo real sobre movimentações importantes.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors backdrop-blur-sm bg-zinc-900/50 shadow-lg">
              <Wallet className="w-6 h-6 mb-6 text-gray-400" />
              <h3 className="text-lg font-light mb-4">Gestão Automatizada</h3>
              <p className="text-gray-400 text-sm">
                Otimização automática do seu portfolio baseada em análises avançadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 sm:p-12 relative overflow-hidden shadow-lg">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
              <div>
                <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">Pronto para começar?</h2>
                <p className="text-gray-400 text-sm">
                  Junte-se aos traders que já estão maximizando seus lucros.
                </p>
              </div>
              <a 
                href="http://app.cryph.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-gray-100 to-gray-400 text-zinc-900 hover:opacity-90 rounded-full text-sm transition-all"
              >
                Criar Conta Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-light mb-4 tracking-wide">Blog</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Aprenda mais sobre criptomoedas e inteligência artificial
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Artigos */}
            <article className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-zinc-700 transition-colors shadow-lg">
              <span className="text-xs text-gray-400">15 Janeiro, 2024</span>
              <h3 className="text-xl font-light">Como a IA está Revolucionando o Trading de Criptomoedas</h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                A inteligência artificial tem transformado significativamente o mercado de criptomoedas. 
                Com algoritmos avançados de machine learning, traders podem agora identificar padrões complexos 
                e prever movimentos de mercado com precisão sem precedentes.
              </p>
              <Link 
                href="/blog/ia-trading-criptomoedas"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                Ler mais
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </article>

            {/* Artigo 2 */}
            <article className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-zinc-700 transition-colors shadow-lg">
              <span className="text-xs text-gray-400">10 Janeiro, 2024</span>
              <h3 className="text-xl font-light">5 Estratégias Essenciais para Gestão de Portfolio Cripto</h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                Uma gestão eficiente de portfolio é crucial para o sucesso no mercado de criptomoedas. 
                Descubra as cinco estratégias fundamentais que todo investidor deveria conhecer para 
                maximizar retornos e minimizar riscos.
              </p>
              <Link 
                href="/blog/estrategias-gestao-portfolio"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                Ler mais
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </article>

            {/* Artigo 3 */}
            <article className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-zinc-700 transition-colors shadow-lg">
              <span className="text-xs text-gray-400">5 Janeiro, 2024</span>
              <h3 className="text-xl font-light">Análise Técnica vs IA: O Futuro do Trading</h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                Com o avanço da tecnologia, surge um debate importante: análise técnica tradicional 
                ou inteligência artificial? Analisamos as vantagens e desvantagens de cada abordagem 
                e como elas podem trabalhar em conjunto.
              </p>
              <Link 
                href="/blog/analise-tecnica-vs-ia"
                className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
              >
                Ler mais
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#features" className="hover:text-white">Recursos</Link></li>
                <li><Link href="#pricing" className="hover:text-white">Preços</Link></li>
                <li><Link href="#demo" className="hover:text-white">Demo</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#about" className="hover:text-white">Sobre</Link></li>
                <li><Link href="#blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="#careers" className="hover:text-white">Carreiras</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#privacy" className="hover:text-white">Privacidade</Link></li>
                <li><Link href="#terms" className="hover:text-white">Termos</Link></li>
                <li><Link href="#security" className="hover:text-white">Segurança</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Social</h3>
              <div className="flex space-x-4">
                <span className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </span>
                <span className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </span>
                <span className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2024 CRYPH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
