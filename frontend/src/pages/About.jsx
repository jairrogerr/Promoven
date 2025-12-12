import React from 'react';
import Navbar from '../components/layout/Navbar';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-background min-h-screen pt-20">
      
      {/* Hero */}
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre a Promoven One</h1>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          Nascemos com um propósito claro: democratizar a gestão empresarial de alta qualidade para os microempreendedores brasileiros.
        </p>
      </div>

      {/* Values Grid */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="flex flex-col items-center text-center p-8 bg-zinc-900 border border-white/5 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-zinc-400 leading-relaxed">
                Transformar a complexidade burocrática em simplicidade operacional, permitindo que todo MEI foque no que realmente importa: seu negócio.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-zinc-900 border border-white/5 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
              <p className="text-zinc-400 leading-relaxed">
                Ser a plataforma de referência em apoio, educação e gestão para os mais de 15 milhões de microempreendedores do Brasil até 2026.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-zinc-900 border border-white/5 rounded-2xl">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
              <p className="text-zinc-400 leading-relaxed">
                Transparência radical, educação contínua, tecnologia humanizada e compromisso com o sucesso do cliente.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold text-white mb-12">Quem faz acontecer</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((_, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-zinc-800 mb-4 grayscale hover:grayscale-0 transition-all duration-300"></div>
                    <div className="h-4 w-24 bg-zinc-800 rounded mb-2"></div>
                    <div className="h-3 w-16 bg-zinc-900 rounded"></div>
                 </div>
              ))}
           </div>
        </div>
      </section>

    </div>
  );
};

export default About;
