import React from 'react';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { User, Lock, Bell, CreditCard, Building } from 'lucide-react';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-500">
      <h2 className="text-xl font-bold text-white mb-6">Configurações da Conta</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        
        {/* Settings Sidebar */}
        <div className="space-y-1">
           {[
             { label: 'Perfil', icon: User, active: true },
             { label: 'Empresa', icon: Building, active: false },
             { label: 'Segurança', icon: Lock, active: false },
             { label: 'Notificações', icon: Bell, active: false },
             { label: 'Assinatura', icon: CreditCard, active: false },
           ].map((item, i) => (
             <button 
               key={i} 
               className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                 item.active 
                   ? 'bg-indigo-600/10 text-indigo-400' 
                   : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
               }`}
             >
               <item.icon size={16} />
               {item.label}
             </button>
           ))}
        </div>

        {/* Content Area */}
        <div className="bg-zinc-900 border border-white/5 rounded-xl p-6 md:p-8">
           <h3 className="text-lg font-semibold text-white mb-6 pb-4 border-b border-white/5">Dados do Perfil</h3>
           
           <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-zinc-900 shadow-lg">
                JS
              </div>
              <div>
                 <Button variant="outline" size="sm" className="border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800 mb-2">Alterar foto</Button>
                 <p className="text-xs text-zinc-500">JPG, GIF ou PNG. Max 1MB.</p>
              </div>
           </div>

           <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <Label className="text-zinc-400">Nome Completo</Label>
                    <Input defaultValue="João da Silva" className="bg-zinc-800/50 border-zinc-700 text-white" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-zinc-400">E-mail</Label>
                    <Input defaultValue="joao@exemplo.com" className="bg-zinc-800/50 border-zinc-700 text-white" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-zinc-400">Telefone</Label>
                    <Input defaultValue="(11) 99999-9999" className="bg-zinc-800/50 border-zinc-700 text-white" />
                 </div>
                 <div className="space-y-2">
                    <Label className="text-zinc-400">CPF</Label>
                    <Input defaultValue="123.456.789-00" disabled className="bg-zinc-800/20 border-zinc-800 text-zinc-500 cursor-not-allowed" />
                 </div>
              </div>

              <div className="pt-6 border-t border-white/5 flex justify-end gap-3">
                 <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5">Cancelar</Button>
                 <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Salvar Alterações</Button>
              </div>
           </form>
        </div>

      </div>
    </div>
  );
};

export default Settings;
