import React from 'react';
import Hero from '../components/sections/Hero';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import HowItWorks from '../components/sections/HowItWorks';

const Home = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <PricingSection />
      
      {/* Testimonials Micro Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-white mb-12">Quem usa, recomenda</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
              <p className="text-zinc-300 italic mb-6">"A Promoven One mudou minha forma de ver a contabilidade. Tudo é muito visual e simples."</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">AS</div>
                <div className="text-left">
                  <div className="text-white text-sm font-semibold">Ana Silva</div>
                  <div className="text-zinc-500 text-xs">Marketing Digital</div>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5">
              <p className="text-zinc-300 italic mb-6">"O assistente de gestão me salva horas toda semana. Recomendo para todo MEI."</p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">CM</div>
                <div className="text-left">
                  <div className="text-white text-sm font-semibold">Carlos Mendes</div>
                  <div className="text-zinc-500 text-xs">Prestador de Serviços</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
