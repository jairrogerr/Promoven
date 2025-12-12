import React from 'react';
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import { 
  MessageSquare, 
  FileText, 
  Settings, 
  Plus
} from 'lucide-react';

const Overview = ({ setChatOpen }) => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      
      {/* Alert Banner */}
      <div className="bg-indigo-900/30 border border-indigo-500/30 p-4 rounded-xl flex items-start gap-3">
         <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
            <MessageSquare size={20} />
         </div>
         <div>
           <h3 className="text-sm font-semibold text-white mb-1">Dica da IA Promoven</h3>
           <p className="text-sm text-zinc-300">Seu faturamento aumentou 15% este mês. Considere aumentar seu limite de crédito.</p>
         </div>
         <Button variant="ghost" size="sm" className="ml-auto text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10">Ver análise</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
          <div className="text-zinc-400 text-sm mb-2">Receita Total</div>
          <div className="text-3xl font-bold text-white mb-2">R$ 15.240,00</div>
          <div className="text-emerald-400 text-sm font-medium">+12% vs mês anterior</div>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
           <div className="text-zinc-400 text-sm mb-2">Notas Emitidas</div>
           <div className="text-3xl font-bold text-white mb-2">14</div>
           <div className="text-zinc-500 text-sm font-medium">Última há 2 horas</div>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
           <div className="text-zinc-400 text-sm mb-2">Próximo DAS</div>
           <div className="text-3xl font-bold text-white mb-2">20/08</div>
           <div className="text-yellow-400 text-sm font-medium">Vence em 5 dias</div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         
         {/* Recent Activity */}
         <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-semibold text-white">Últimas Atividades</h3>
               <Button variant="ghost" size="sm" className="h-8 text-xs">Ver tudo</Button>
            </div>
            <div className="space-y-4">
               {[1,2,3].map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                        <FileText size={18} className="text-zinc-400" />
                     </div>
                     <div className="flex-1">
                        <div className="text-sm font-medium text-white">Nota Fiscal #20{30+i} emitida</div>
                        <div className="text-xs text-zinc-500">Serviços de Design</div>
                     </div>
                     <div className="text-sm font-medium text-white">R$ 1.200,00</div>
                  </div>
               ))}
            </div>
         </div>

         {/* Quick Actions */}
         <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-6">Acesso Rápido</h3>
            <div className="grid grid-cols-2 gap-4">
               <button className="p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border border-white/5 flex flex-col items-center gap-2 transition-colors" onClick={() => toast("Funcionalidade Demo: Abriria o modal de emissão")}>
                  <Plus size={24} className="text-indigo-400" />
                  <span className="text-sm font-medium">Emitir Nota</span>
               </button>
               <button className="p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border border-white/5 flex flex-col items-center gap-2 transition-colors" onClick={() => setChatOpen(true)}>
                  <MessageSquare size={24} className="text-emerald-400" />
                  <span className="text-sm font-medium">Falar com IA</span>
               </button>
               <button className="p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border border-white/5 flex flex-col items-center gap-2 transition-colors">
                  <FileText size={24} className="text-yellow-400" />
                  <span className="text-sm font-medium">Gerar DAS</span>
               </button>
               <button className="p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border border-white/5 flex flex-col items-center gap-2 transition-colors">
                  <Settings size={24} className="text-purple-400" />
                  <span className="text-sm font-medium">Meus Dados</span>
               </button>
            </div>
         </div>

      </div>
    </div>
  );
};

export default Overview;
