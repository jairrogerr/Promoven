import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  Wallet, 
  BookOpen, 
  Settings as SettingsIcon, 
  LogOut, 
  Search, 
  Bell, 
  MessageSquare,
  X,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Import Dashboard Components
import Overview from '../components/dashboard/Overview';
import Invoices from '../components/dashboard/Invoices';
import Finance from '../components/dashboard/Finance';
import Education from '../components/dashboard/Education';
import Settings from '../components/dashboard/Settings';

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
    { id: 'settings', icon: SettingsIcon, label: 'Configurações' },
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'dashboard': return <Overview setChatOpen={setChatOpen} />;
      case 'invoices': return <Invoices />;
      case 'finance': return <Finance />;
      case 'education': return <Education />;
      case 'settings': return <Settings />;
      default: return <Overview setChatOpen={setChatOpen} />;
    }
  };

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
          {renderContent()}
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
