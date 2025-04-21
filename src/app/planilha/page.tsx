"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function Planilha() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Aqui você pode adicionar a lógica para enviar os dados para seu backend
      // const response = await fetch('/api/capture', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Redireciona para a página de sucesso
      router.push('/sucesso');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatWhatsApp = (value: string) => {
    // Remove non-digits
    const numbers = value.replace(/\D/g, '');
    
    // Format as (XX) XXXXX-XXXX
    if (numbers.length <= 11) {
      let formatted = numbers;
      if (numbers.length > 2) formatted = `(${numbers.slice(0,2)}) ${numbers.slice(2)}`;
      if (numbers.length > 7) formatted = `(${numbers.slice(0,2)}) ${numbers.slice(2,7)}-${numbers.slice(7)}`;
      return formatted;
    }
    return value;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'whatsapp') {
      setFormData(prev => ({
        ...prev,
        [name]: formatWhatsApp(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md text-center">
        <div className="mb-10">
          <div className="bg-zinc-800/50 p-5 rounded-lg mb-6">
            <p className="text-lg text-gray-300 mb-3">
              Baixe uma planilha gratuita para criptomoedas com indicação de 2 ativos de alto potencial
            </p>
            <p className="text-sm text-gray-400">
              Nossa equipe de especialistas selecionou 2 criptomoedas com excelente potencial de valorização para o próximo ciclo
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Seu nome completo"
            required
            className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:border-zinc-700 transition-colors"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Seu melhor e-mail"
            required
            className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:border-zinc-700 transition-colors"
          />

          <input
            type="tel"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
            placeholder="Seu WhatsApp"
            required
            className="w-full bg-transparent border border-zinc-800 rounded-lg px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:border-zinc-700 transition-colors"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-gray-100 to-gray-400 text-black font-medium rounded-lg px-4 py-3 text-base hover:opacity-90 transition-colors flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="w-6 h-6 border-2 border-zinc-900 border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Continuar
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-xs text-gray-500 mt-6">
            Seus dados estão seguros e protegidos pela nossa política de privacidade.
          </p>
        </form>
      </div>
    </div>
  );
}
