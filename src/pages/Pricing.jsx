import React from 'react';
import Navbar from '../components/layout/Navbar';
import PricingSection from '../components/sections/PricingSection';

const Pricing = () => {
  return (
    <div className="bg-background min-h-screen pt-20">
       <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Investimento Inteligente</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Escolha o plano ideal para o tamanho do seu sonho.
        </p>
      </div>
      <PricingSection />
    </div>
  );
};

export default Pricing;
