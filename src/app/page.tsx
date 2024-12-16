"use client";

import Image from "next/image";
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
      {/* Header com menu mobile */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="CRYPH"
                width={100}
                height={32}
                className="h-8 w-auto sm:h-10"
                priority
              />
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-12">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">Recursos</a>
              <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm">Como Funciona</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Preços</a>
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
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10">
              <div className="flex flex-col space-y-4 p-6">
                <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm py-2">Recursos</a>
                <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors text-sm py-2">Como Funciona</a>
                <a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm py-2">Preços</a>
                <a 
                  href="http://app.cryph.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 hover:bg-white/5 px-6 py-3 rounded-full text-sm transition-colors text-center"
                >
                  Começar
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section - Ajustes Mobile */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16">
            <div className="lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="flex items-center space-x-2 text-gray-400 justify-center lg:justify-start">
                <Shield className="w-4 h-4" />
                <span className="text-xs tracking-wider">TECNOLOGIA CONFIÁVEL</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-wide">
                Domine o Mercado Cripto com
                <span className="text-gray-400"> Inteligência Artificial</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400 font-light">
                Nossa IA analisa o mercado 24/7 para você nunca perder uma oportunidade.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a 
                  href="http://app.cryph.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-white/20 hover:bg-white/5 rounded-full text-sm transition-colors group"
                >
                  Começar Gratuitamente
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
              
              {/* Stats - Mobile Responsive */}
              <div className="flex items-center justify-between sm:justify-start sm:gap-12 pt-8 px-4 sm:px-0">
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-light">98%</div>
                  <div className="text-gray-500 text-xs sm:text-sm">Precisão</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-gray-800"></div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-light">24/7</div>
                  <div className="text-gray-500 text-xs sm:text-sm">Análise</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-gray-800"></div>
                <div className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-light">500+</div>
                  <div className="text-gray-500 text-xs sm:text-sm">Usuários</div>
                </div>
              </div>
            </div>

            {/* Visual Section - Ajustado para Mobile */}
            <div className="lg:w-1/2 w-full">
              <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden border border-white/10">
                {/* Fundo mais sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
                
                {/* Grade mais sutil */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                {/* Elementos flutuantes mais minimalistas */}
                <div className="absolute top-1/4 left-1/4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform -rotate-6">
                  <TrendingUp className="w-6 h-6 text-white" />
                  <div className="text-sm mt-2">+245%</div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 bg-black/80 backdrop-blur-sm rounded-lg p-4 border border-white/10 transform rotate-6">
                  <BrainCog className="w-6 h-6 text-white" />
                  <div className="text-sm mt-2">IA Ativa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Mobile Adjustments */}
      <section id="features" className="py-12 sm:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4 tracking-wide">Recursos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              Tecnologia de ponta para maximizar seus resultados.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cards mais minimalistas */}
            <div className="p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm">
              <BrainCog className="w-6 h-6 mb-6 text-white" />
              <h3 className="text-lg font-light mb-4">IA Preditiva</h3>
              <p className="text-gray-400 text-sm">
                Algoritmos avançados que analisam padrões de mercado e preveem tendências.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm">
              <Bell className="w-6 h-6 mb-6 text-white" />
              <h3 className="text-lg font-light mb-4">Alertas Smart</h3>
              <p className="text-gray-400 text-sm">
                Notificações personalizadas em tempo real sobre movimentações importantes.
              </p>
            </div>

            <div className="p-8 rounded-xl border border-white/10 hover:border-white/20 transition-colors backdrop-blur-sm">
              <Wallet className="w-6 h-6 mb-6 text-white" />
              <h3 className="text-lg font-light mb-4">Gestão Automatizada</h3>
              <p className="text-gray-400 text-sm">
                Otimização automática do seu portfolio baseada em análises avançadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Adjustments */}
      <section className="py-12 sm:py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="bg-black border border-white/10 rounded-xl p-6 sm:p-12 relative overflow-hidden">
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
                className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-3 border border-white/20 hover:bg-white/5 rounded-full text-sm transition-colors"
              >
                Criar Conta Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Adjustments */}
      <footer className="border-t border-white/5 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white">Recursos</a></li>
                <li><a href="#pricing" className="hover:text-white">Preços</a></li>
                <li><a href="#demo" className="hover:text-white">Demo</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white">Sobre</a></li>
                <li><a href="#blog" className="hover:text-white">Blog</a></li>
                <li><a href="#careers" className="hover:text-white">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#privacy" className="hover:text-white">Privacidade</a></li>
                <li><a href="#terms" className="hover:text-white">Termos</a></li>
                <li><a href="#security" className="hover:text-white">Segurança</a></li>
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
          <div className="border-t border-white/5 mt-8 sm:mt-12 pt-8 text-center text-gray-400 text-xs sm:text-sm">
            <p>&copy; 2024 CRYPH. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
