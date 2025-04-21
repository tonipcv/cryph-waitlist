"use client";

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CaptureForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    investmentValue: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Redireciona para a página de cadastro com os dados como query params
      const params = new URLSearchParams({
        email: formData.email,
        name: formData.name,
        whatsapp: formData.whatsapp,
        capital: formData.investmentValue
      });
      
      router.push(`/cadastro?${params.toString()}`);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Formatação específica para WhatsApp
    if (name === 'whatsapp') {
      let formatted = value.replace(/\D/g, '');
      if (formatted.length > 11) formatted = formatted.slice(0, 11);
      
      if (formatted.length > 2) {
        formatted = `(${formatted.slice(0, 2)}) ${formatted.slice(2)}`;
      }
      if (formatted.length > 10) {
        formatted = `${formatted.slice(0, 10)}-${formatted.slice(10)}`;
      }
      
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else if (name === 'investmentValue') {
      // Remove tudo exceto números e ponto
      let formatted = value.replace(/[^\d.]/g, '');
      
      // Garante apenas um ponto decimal
      const parts = formatted.split('.');
      if (parts.length > 2) formatted = parts[0] + '.' + parts.slice(1).join('');
      
      // Formata como moeda
      const number = parseFloat(formatted || '0');
      formatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(number);
      
      setFormData(prev => ({ ...prev, [name]: formatted }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="bg-zinc-800/50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-light mb-2">🚀 Oportunidade Exclusiva!</h3>
        <p className="text-sm text-gray-400">
          Descubra como investidores estão multiplicando seu patrimônio com nossa tecnologia de análise cripto.
        </p>
      </div>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu Nome"
          required
          className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-700 text-white placeholder-gray-500"
        />
      </div>
      
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu Melhor E-mail"
          required
          className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-700 text-white placeholder-gray-500"
        />
      </div>
      
      <div>
        <input
          type="tel"
          name="whatsapp"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="Seu WhatsApp"
          required
          className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-700 text-white placeholder-gray-500"
        />
      </div>
      
      <div>
        <input
          type="text"
          name="investmentValue"
          value={formData.investmentValue}
          onChange={handleChange}
          placeholder="Valor Disponível para Investir"
          required
          className="w-full px-4 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg focus:outline-none focus:border-zinc-700 text-white placeholder-gray-500"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-400 text-zinc-900 rounded-lg hover:opacity-90 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="w-6 h-6 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            Quero Multiplicar Meu Patrimônio
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-xs text-center text-gray-500 mt-4">
        Seus dados estão 100% seguros e serão usados apenas para contato sobre esta oportunidade.
      </p>
    </form>
  );
}
