import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Wallet, 
  BookOpen, 
  Settings, 
  LogOut, 
  Plus, 
  Search, 
  Bell, 
  MessageSquare,
  X,
  Send,
  MoreVertical,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { toast } from "sonner";

const DashboardDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', text: 'Olá! Sou a IA da Promoven. Analisei suas finanças e notei que você pode economizar R$ 200 em taxas este mês. Quer saber como?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    setChatMessages([...chatMessages, { role: 'user', text: inputMessage }]);
    setInputMessage('');
    
    // Simulate AI response
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: 'assistant', text: 'Entendi! Como este é um ambiente de demonstração, não posso acessar seus dados reais, mas na versão completa eu poderia gerar esse relatório agora mesmo.' }]);
    }, 1000);
  };

  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Visão Geral' },
    { id: 'invoices', icon: FileText, label: 'Notas Fiscais' },
    { id: 'finance', icon: Wallet, label: 'Financeiro' },
    { id: 'education', icon: BookOpen, label: 'Educação' },
    { id: 'settings', icon: Settings, label: 'Configurações' },
  ];

  return (
    <div className="flex h-screen bg-zinc-950 text-white overflow-hidden font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-zinc-900/50 hidden md:flex flex-col">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-white font-bold text-lg">Promoven</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id 
                  ? 'bg-indigo-600/10 text-indigo-400' 
                  : 'text-zinc-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
           <Link to="/">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                <LogOut size={20} />
                Sair da Demo
            </button>
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Header */}
        <header className="h-16 border-b border-white/5 bg-zinc-900/50 flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold capitalize">{navItems.find(i => i.id === activeTab)?.label}</h2>
          
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <input 
                type="text" 
                placeholder="Buscar..." 
                className="bg-zinc-800 border-none rounded-full pl-10 pr-4 py-1.5 text-sm text-white focus:ring-1 focus:ring-indigo-500 outline-none w-64"
              />
            </div>
            <button className="relative text-zinc-400 hover:text-white">
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-xs font-bold">
              ME
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-auto p-6">
          
          {activeTab === 'dashboard' && (
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
          )}
          
          {activeTab !== 'dashboard' && (
             <div className="flex flex-col items-center justify-center h-[60vh] text-center p-8">
                <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center mb-6">
                   <Settings className="text-zinc-500 animate-spin-slow" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Funcionalidade em Desenvolvimento</h3>
                <p className="text-zinc-400 max-w-md">
                   Esta área estará disponível na versão completa da Promoven One. No momento, explore o Dashboard e a IA.
                </p>
                <Button className="mt-6 bg-white text-black hover:bg-zinc-200" onClick={() => setActiveTab('dashboard')}>
                   Voltar ao Dashboard
                </Button>
             </div>
          )}

        </main>
      </div>

      {/* AI Chat Widget */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-zinc-900 border border-indigo-500/30 rounded-2xl shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-10">
           <div className="p-4 border-b border-white/5 flex items-center justify-between bg-indigo-900/20 rounded-t-2xl">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <MessageSquare size={16} className="text-white" />
                 </div>
                 <div>
                    <h4 className="text-sm font-bold text-white">Assistente Promoven</h4>
                    <span className="text-xs text-emerald-400 flex items-center gap-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Online
                    </span>
                 </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-zinc-400 hover:text-white">
                 <X size={20} />
              </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, idx) => (
                 <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                       msg.role === 'user' 
                       ? 'bg-indigo-600 text-white rounded-br-none' 
                       : 'bg-zinc-800 text-zinc-200 rounded-bl-none'
                    }`}>
                       {msg.text}
                    </div>
                 </div>
              ))}
           </div>

           <div className="p-4 border-t border-white/5">
              <form onSubmit={handleSendMessage} className="relative">
                 <input 
                    type="text" 
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Digite sua dúvida..." 
                    className="w-full bg-zinc-800 border-none rounded-full pl-4 pr-12 py-3 text-sm text-white focus:ring-1 focus:ring-indigo-500 outline-none"
                 />
                 <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors">
                    <Send size={16} />
                 </button>
              </form>
           </div>
        </div>
      )}

      {/* Chat Trigger Button (if closed) */}
      {!chatOpen && (
         <button 
            onClick={() => setChatOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors hover:scale-110 z-50 group"
         >
            <MessageSquare size={24} className="text-white" />
            <span className="absolute right-full mr-4 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
               Falar com IA
            </span>
         </button>
      )}

    </div>
  );
};

export default DashboardDemo;
