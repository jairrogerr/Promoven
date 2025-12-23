import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../ui/button";
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { heroContent } from '../../data/mockData';
import DashboardMockup from './DashboardMockup';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      
      {/* Background Gradient Spotlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-medium text-zinc-300">Nova versão 2.0 disponível</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            A plataforma que <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              simplifica a vida do MEI
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            {heroContent.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link to="/signup" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 h-12 px-8 rounded-full text-base font-semibold">
                {heroContent.ctaPrimary}
              </Button>
            </Link>
            <Link to="/features" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 rounded-full text-base border-white/10 text-white hover:bg-white/5 hover:text-white">
                {heroContent.ctaSecondary} <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-zinc-500">
             <div className="flex items-center gap-2">
               <CheckCircle2 size={16} className="text-emerald-500" /> 
               <span>Sem cartão de crédito</span>
             </div>
             <div className="flex items-center gap-2">
               <CheckCircle2 size={16} className="text-emerald-500" /> 
               <span>Cancelamento grátis</span>
             </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-12 relative z-20">
          <DashboardMockup />
        </div>

      </div>
      
      {/* Bottom fade for smooth transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
