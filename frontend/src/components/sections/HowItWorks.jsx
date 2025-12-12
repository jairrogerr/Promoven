import React from 'react';

const HowItWorks = () => {
  const steps = [
    { num: '01', title: 'Crie sua conta', desc: 'Cadastro rápido em menos de 2 minutos. Sem cartão de crédito.' },
    { num: '02', title: 'Conecte seus dados', desc: 'Importe extratos ou conecte sua conta PJ para leitura automática.' },
    { num: '03', title: 'Receba insights', desc: 'Nossa IA analisa suas finanças e sugere melhorias imediatas.' },
    { num: '04', title: 'Cresça tranquilo', desc: 'Foque no seu negócio enquanto cuidamos da burocracia.' }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simples como deve ser
            </h2>
            <p className="text-zinc-400 text-lg mb-8">
              A Promoven One remove a complexidade da gestão empresarial. Você não precisa ser contador para entender seus números.
            </p>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono font-bold group-hover:bg-indigo-500/10 transition-colors">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                    <p className="text-zinc-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full" />
             <div className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 aspect-square flex items-center justify-center">
                {/* Visual representation of 'Simplicity' */}
                <div className="text-center">
                   <div className="w-24 h-24 bg-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><polyline points="20 6 9 17 4 12"></polyline></svg>
                   </div>
                   <div className="text-2xl font-bold text-white mb-2">Tudo pronto!</div>
                   <p className="text-zinc-500">Sua empresa em dia em poucos cliques.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
