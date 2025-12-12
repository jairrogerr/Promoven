import React from 'react';
import { Button } from "../../components/ui/button";
import { Plus, Download, Filter, MoreHorizontal } from 'lucide-react';

const Invoices = () => {
  const invoices = [
    { id: '00234', client: 'Tech Solutions Ltda', date: '12/08/2025', value: 'R$ 4.500,00', status: 'issued' },
    { id: '00233', client: 'Marketing Digital SA', date: '10/08/2025', value: 'R$ 2.100,00', status: 'paid' },
    { id: '00232', client: 'Consultoria ABC', date: '05/08/2025', value: 'R$ 1.800,00', status: 'cancelled' },
    { id: '00231', client: 'Loja Exemplo', date: '01/08/2025', value: 'R$ 3.250,00', status: 'paid' },
    { id: '00230', client: 'Cliente Final', date: '28/07/2025', value: 'R$ 550,00', status: 'paid' },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'paid': return <span className="px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Pago</span>;
      case 'issued': return <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">Emitida</span>;
      case 'cancelled': return <span className="px-2 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-medium">Cancelada</span>;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Notas Fiscais</h2>
          <p className="text-zinc-400 text-sm">Gerencie suas emissões e recebimentos</p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="border-zinc-700 hover:bg-zinc-800 text-zinc-300">
             <Filter className="w-4 h-4 mr-2" />
             Filtrar
           </Button>
           <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
             <Plus className="w-4 h-4 mr-2" />
             Nova Nota
           </Button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-zinc-800/50 text-zinc-400 uppercase text-xs">
              <tr>
                <th className="px-6 py-4 font-medium">Número</th>
                <th className="px-6 py-4 font-medium">Cliente</th>
                <th className="px-6 py-4 font-medium">Emissão</th>
                <th className="px-6 py-4 font-medium">Valor</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {invoices.map((invoice) => (
                <tr key={invoice.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">#{invoice.id}</td>
                  <td className="px-6 py-4 text-zinc-300">{invoice.client}</td>
                  <td className="px-6 py-4 text-zinc-400">{invoice.date}</td>
                  <td className="px-6 py-4 text-white font-medium">{invoice.value}</td>
                  <td className="px-6 py-4">{getStatusBadge(invoice.status)}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-zinc-500 hover:text-white p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-white/5 bg-zinc-800/30 text-center">
           <button className="text-sm text-indigo-400 hover:text-indigo-300 font-medium">Ver todas as notas</button>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
