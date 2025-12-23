import React, { useState, useEffect } from 'react';
import { Button } from "../../components/ui/button";
import { toast } from "sonner";
import {
  MessageSquare,
  FileText,
  Settings,
  Plus
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { supabase } from '../../lib/supabase';

const Overview = ({ setChatOpen }) => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalRevenue: 0,
    invoiceCount: 0,
    recentInvoices: [],
    loading: true
  });

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    try {
      const [invoicesData, recordsData] = await Promise.all([
        supabase
          .from('invoices')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(3),
        supabase
          .from('financial_records')
          .select('*')
          .eq('user_id', user.id)
          .eq('type', 'income')
          .order('transaction_date', { ascending: false })
      ]);

      let totalRevenue = 0;
      if (recordsData.data) {
        totalRevenue = recordsData.data.reduce((sum, record) => sum + parseFloat(record.amount), 0);
      }

      setStats({
        totalRevenue,
        invoiceCount: invoicesData.data?.length || 0,
        recentInvoices: invoicesData.data || [],
        loading: false
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      setStats(prev => ({ ...prev, loading: false }));
      toast.error('Erro ao carregar dados');
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  if (stats.loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-zinc-400">Carregando dados...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-500">

      <div className="bg-indigo-900/30 border border-indigo-500/30 p-4 rounded-xl flex items-start gap-3">
         <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
            <MessageSquare size={20} />
         </div>
         <div>
           <h3 className="text-sm font-semibold text-white mb-1">Dica da IA Promoven</h3>
           <p className="text-sm text-zinc-300">Acompanhe suas notas fiscais e mantenha seus registros sempre atualizados.</p>
         </div>
         <Button variant="ghost" size="sm" className="ml-auto text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10">Ver análise</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
          <div className="text-zinc-400 text-sm mb-2">Receita Total</div>
          <div className="text-3xl font-bold text-white mb-2">{formatCurrency(stats.totalRevenue)}</div>
          <div className="text-emerald-400 text-sm font-medium">Registros de renda</div>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
           <div className="text-zinc-400 text-sm mb-2">Notas Emitidas</div>
           <div className="text-3xl font-bold text-white mb-2">{stats.invoiceCount}</div>
           <div className="text-zinc-500 text-sm font-medium">Total no período</div>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-6 rounded-xl">
           <div className="text-zinc-400 text-sm mb-2">Status</div>
           <div className="text-3xl font-bold text-white mb-2">Ativo</div>
           <div className="text-emerald-400 text-sm font-medium">Plataforma operacional</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

         <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
               <h3 className="font-semibold text-white">Últimas Notas Emitidas</h3>
               <Button variant="ghost" size="sm" className="h-8 text-xs">Ver tudo</Button>
            </div>
            <div className="space-y-4">
               {stats.recentInvoices.length > 0 ? (
                  stats.recentInvoices.map((invoice) => (
                     <div key={invoice.id} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                           <FileText size={18} className="text-zinc-400" />
                        </div>
                        <div className="flex-1">
                           <div className="text-sm font-medium text-white">Nota #{invoice.invoice_number}</div>
                           <div className="text-xs text-zinc-500">{invoice.client_name}</div>
                        </div>
                        <div className="text-sm font-medium text-white">{formatCurrency(invoice.amount)}</div>
                     </div>
                  ))
               ) : (
                  <div className="text-center py-8 text-zinc-400">
                     Nenhuma nota emitida ainda
                  </div>
               )}
            </div>
         </div>

         <div className="bg-zinc-900 border border-white/5 rounded-xl p-6">
            <h3 className="font-semibold text-white mb-6">Acesso Rápido</h3>
            <div className="grid grid-cols-2 gap-4">
               <button className="p-4 bg-zinc-800/50 hover:bg-zinc-800 rounded-xl border border-white/5 flex flex-col items-center gap-2 transition-colors" onClick={() => toast("Funcionalidade em desenvolvimento")}>
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
                  <Settings size={24} className="text-blue-400" />
                  <span className="text-sm font-medium">Meus Dados</span>
               </button>
            </div>
         </div>

      </div>
    </div>
  );
};

export default Overview;
