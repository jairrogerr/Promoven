import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Calendar, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from "../../components/ui/button";

const Finance = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Controle Financeiro</h2>
          <p className="text-zinc-400 text-sm">Visão completa do seu fluxo de caixa</p>
        </div>
        <div className="flex gap-2">
           <div className="bg-zinc-900 border border-white/5 rounded-lg p-1 flex">
             <button className="px-3 py-1.5 text-sm font-medium bg-zinc-800 text-white rounded-md shadow-sm">Mês</button>
             <button className="px-3 py-1.5 text-sm font-medium text-zinc-400 hover:text-white">Ano</button>
           </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-indigo-900/50 to-zinc-900 border border-indigo-500/20 p-6 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <DollarSign size={64} className="text-white" />
          </div>
          <p className="text-indigo-300 text-sm font-medium mb-1">Saldo em Caixa</p>
          <h3 className="text-3xl font-bold text-white mb-4">R$ 18.450,90</h3>
          <div className="flex items-center text-xs text-indigo-200 bg-indigo-500/20 w-fit px-2 py-1 rounded-full">
            <TrendingUp size={14} className="mr-1" />
            Caixa saudável
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
           <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-zinc-400 text-sm font-medium">Entradas</p>
                <h3 className="text-2xl font-bold text-white mt-1">R$ 22.100,00</h3>
              </div>
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                 <ArrowUpRight size={20} />
              </div>
           </div>
           <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
             <div className="bg-emerald-500 h-full w-[75%]"></div>
           </div>
           <p className="text-xs text-zinc-500 mt-2">75% da meta mensal</p>
        </div>

        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
           <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-zinc-400 text-sm font-medium">Saídas</p>
                <h3 className="text-2xl font-bold text-white mt-1">R$ 3.649,10</h3>
              </div>
              <div className="p-2 bg-rose-500/10 rounded-lg text-rose-400">
                 <ArrowDownRight size={20} />
              </div>
           </div>
           <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
             <div className="bg-rose-500 h-full w-[25%]"></div>
           </div>
           <p className="text-xs text-zinc-500 mt-2">Dentro do orçamento</p>
        </div>
      </div>

      {/* Chart Mockup */}
      <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
        <h3 className="font-semibold text-white mb-6">Fluxo de Caixa Anual</h3>
        <div className="h-64 flex items-end justify-between gap-4 px-2">
           {[35, 45, 30, 60, 55, 70, 65, 50, 80, 75, 90, 85].map((h, i) => (
             <div key={i} className="w-full flex flex-col justify-end gap-1 h-full group cursor-pointer">
                <div 
                  className="bg-indigo-500/30 group-hover:bg-indigo-500 transition-colors rounded-t-sm w-full relative" 
                  style={{ height: `${h}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    R$ {h * 150}
                  </div>
                </div>
                <div className="h-[1px] bg-white/10 w-full"></div>
             </div>
           ))}
        </div>
        <div className="flex justify-between mt-4 text-xs text-zinc-500 px-2 uppercase font-medium">
           <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
           <span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
        </div>
      </div>

    </div>
  );
};

export default Finance;
