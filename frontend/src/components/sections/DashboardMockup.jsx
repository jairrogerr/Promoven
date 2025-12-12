import React from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  CreditCard, 
  Search, 
  Bell, 
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto perspective-1000">
      {/* Decorative Glows */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px]" />

      {/* Main Glass Panel */}
      <div className="relative bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform rotate-x-6 hover:rotate-x-0 transition-transform duration-700 ease-out p-4 md:p-6">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="h-4 w-px bg-white/10 mx-2" />
            <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/5">
              <Search size={14} className="text-zinc-500" />
              <span className="text-xs text-zinc-500">Buscar transações...</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell size={16} className="text-zinc-400" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white">
              JS
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="hidden md:flex flex-col gap-6 w-12 pt-2">
             {[BarChart3, Users, CreditCard, TrendingUp].map((Icon, i) => (
               <div key={i} className={`p-2 rounded-lg ${i === 0 ? 'bg-indigo-500/20 text-indigo-400' : 'text-zinc-600 hover:bg-white/5 hover:text-zinc-400'}`}>
                 <Icon size={20} />
               </div>
             ))}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {[
                { label: 'Receita Mensal', value: 'R$ 12.450', trend: '+12%', icon: TrendingUp, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                { label: 'Despesas', value: 'R$ 4.200', trend: '-2%', icon: ArrowDownRight, color: 'text-rose-400', bg: 'bg-rose-500/10' },
                { label: 'Lucro Líquido', value: 'R$ 8.250', trend: '+15%', icon: ArrowUpRight, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400">{stat.label}</span>
                    <stat.icon size={14} className={stat.color} />
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className={`text-xs px-2 py-1 rounded-full w-fit ${stat.bg} ${stat.color}`}>
                    {stat.trend} vs mês anterior
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Area Simulation */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-sm font-medium text-white">Fluxo de Caixa</h4>
                <MoreHorizontal size={16} className="text-zinc-500" />
              </div>
              <div className="h-32 flex items-end justify-between gap-2">
                {[40, 65, 35, 78, 52, 60, 85, 45, 70, 90, 55, 80].map((h, i) => (
                  <div key={i} className="w-full bg-indigo-500/20 rounded-t-sm relative group hover:bg-indigo-500/40 transition-colors cursor-pointer" style={{ height: `${h}%` }}>
                     {/* Tooltip on hover */}
                     <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-zinc-800 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 z-10">
                        R$ {h * 120}
                     </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-zinc-500">
                <span>Jan</span><span>Fev</span><span>Mar</span><span>Abr</span><span>Mai</span><span>Jun</span>
                <span>Jul</span><span>Ago</span><span>Set</span><span>Out</span><span>Nov</span><span>Dez</span>
              </div>
            </div>

            {/* Recent Items Row */}
            <div className="space-y-3">
               <h4 className="text-sm font-medium text-white mb-2">Atividades Recentes</h4>
               {[1, 2].map((_, i) => (
                 <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs">
                        {i === 0 ? 'NF' : 'Pg'}
                     </div>
                     <div>
                       <div className="text-xs font-medium text-white">{i === 0 ? 'Nota Fiscal #2033 emitida' : 'Pagamento recebido'}</div>
                       <div className="text-[10px] text-zinc-500">Hoje, 14:30</div>
                     </div>
                   </div>
                   <span className="text-xs font-medium text-emerald-400">Concluído</span>
                 </div>
               ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
