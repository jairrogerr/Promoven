import React from 'react';
import { PlayCircle, FileText, BookOpen, Clock } from 'lucide-react';
import { Button } from "../../components/ui/button";

const Education = () => {
  const contents = [
    {
      category: 'Vídeo Aula',
      title: 'Como separar as finanças pessoais da empresa',
      duration: '12 min',
      author: 'Especialista Promoven',
      image: 'bg-indigo-900',
      icon: PlayCircle
    },
    {
      category: 'Artigo',
      title: 'Guia completo do DAS-MEI 2025',
      duration: '5 min leitura',
      author: 'Equipe Contábil',
      image: 'bg-emerald-900',
      icon: FileText
    },
    {
      category: 'Curso Rápido',
      title: 'Marketing Digital para Prestadores de Serviço',
      duration: '4 módulos',
      author: 'Marketing Team',
      image: 'bg-purple-900',
      icon: BookOpen
    }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h2 className="text-xl font-bold text-white">Educação Empreendedora</h2>
        <p className="text-zinc-400 text-sm">Conteúdos selecionados para você crescer</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contents.map((item, idx) => (
          <div key={idx} className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden group hover:border-indigo-500/30 transition-all">
            <div className={`h-40 ${item.image} relative p-6 flex items-center justify-center`}>
               <div className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                 <item.icon size={24} />
               </div>
            </div>
            <div className="p-6">
               <div className="flex items-center gap-2 mb-3 text-xs font-medium uppercase tracking-wider text-indigo-400">
                  {item.category}
               </div>
               <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-indigo-300 transition-colors">
                 {item.title}
               </h3>
               <div className="flex items-center justify-between mt-6 text-xs text-zinc-500 border-t border-white/5 pt-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {item.duration}
                  </span>
                  <span>Por {item.author}</span>
               </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-8 text-center mt-8">
         <h3 className="text-lg font-semibold text-white mb-2">Quer aprender algo específico?</h3>
         <p className="text-zinc-400 mb-6 text-sm">Nossa IA pode criar um plano de estudos personalizado para o seu momento.</p>
         <Button className="bg-white text-black hover:bg-zinc-200">Gerar Trilha de Aprendizado</Button>
      </div>
    </div>
  );
};

export default Education;
