import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">P</span>
              </div>
              <span className="text-white">Promoven<span className="text-indigo-400">One</span></span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed">
              A plataforma definitiva para MEIs e microempreendedores. Simplifique sua gestão e cresça com segurança.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-zinc-500 hover:text-indigo-400 text-sm">Funcionalidades</Link></li>
              <li><Link to="/pricing" className="text-zinc-500 hover:text-indigo-400 text-sm">Planos</Link></li>
              <li><Link to="/roadmap" className="text-zinc-500 hover:text-indigo-400 text-sm">Roadmap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-zinc-500 hover:text-indigo-400 text-sm">Sobre Nós</Link></li>
              <li><Link to="/careers" className="text-zinc-500 hover:text-indigo-400 text-sm">Carreiras</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-indigo-400 text-sm">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-zinc-500 hover:text-indigo-400 text-sm">Privacidade</Link></li>
              <li><Link to="/terms" className="text-zinc-500 hover:text-indigo-400 text-sm">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">© 2024 Promoven One. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter size={18} /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
