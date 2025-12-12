import React from 'react';
import Navbar from '../components/layout/Navbar';
import FeaturesSection from '../components/sections/FeaturesSection';
import { Button } from "../components/ui/button";
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Recursos Poderosos</h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
          Descubra como a Promoven One pode automatizar a rotina do seu negócio.
        </p>
      </div>
      <FeaturesSection />
      
      <div className="bg-indigo-900/20 py-20 border-y border-indigo-500/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Pronto para começar?</h2>
          <Link to="/signup">
            <Button size="lg" className="rounded-full px-8 bg-white text-black hover:bg-zinc-200">Criar Conta Grátis</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
