import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-light mb-4">Página não encontrada</h2>
        <Link 
          href="/"
          className="bg-white text-black font-medium rounded-lg px-6 py-3 text-base hover:bg-gray-100 transition-colors inline-block"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
