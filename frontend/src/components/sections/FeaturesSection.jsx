import React from 'react';
import { featuresList } from '../../data/mockData';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative bg-zinc-950/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tudo o que você precisa em um só lugar
          </h2>
          <p className="text-zinc-400 text-lg">
            Deixe as planilhas complicadas de lado. A Promoven One centraliza a gestão do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-indigo-500/30 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
