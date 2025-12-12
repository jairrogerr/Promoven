import React from 'react';
import { Check } from 'lucide-react';
import { Button } from "../ui/button";
import { pricingPlans } from '../../data/mockData';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Planos transparentes para cada fase
          </h2>
          <p className="text-zinc-400 text-lg">
            Comece grátis e evolua conforme o seu negócio cresce. Sem surpresas na fatura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 flex flex-col ${
                plan.highlight 
                  ? 'bg-zinc-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10' 
                  : 'bg-zinc-900/40 border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Mais Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-medium text-zinc-300 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-zinc-500">{plan.period}</span>
                </div>
                <p className="text-zinc-500 text-sm mt-4">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check size={18} className="text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/signup">
                <Button 
                  className={`w-full rounded-full font-semibold ${
                    plan.highlight 
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
