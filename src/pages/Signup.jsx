import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "sonner";
import { Loader2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!fullName || !email || !password) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    if (password.length < 8) {
      setError('A senha deve ter no mínimo 8 caracteres');
      return;
    }

    setLoading(true);
    const { error: signUpError } = await signUp(email, password, fullName, companyName);

    if (signUpError) {
      setError(signUpError);
      toast.error(signUpError);
      setLoading(false);
    } else {
      toast.success("Conta criada com sucesso!", {
        description: "Bem-vindo à Promoven One!"
      });
      navigate('/demo-dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900/10 to-transparent" />
      </div>

      <div className="w-full max-w-md bg-zinc-900/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-white text-xl font-bold">Promoven<span className="text-indigo-400">One</span></span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Crie sua conta</h1>
          <p className="text-zinc-400">Comece a transformar seu negócio hoje</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome Completo</Label>
            <Input
              id="name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Seu nome"
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Empresa (Opcional)</Label>
            <Input
              id="company"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Nome da sua empresa"
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 8 caracteres"
              className="bg-zinc-800/50 border-zinc-700 text-white"
              required
            />
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white" disabled={loading}>
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {loading ? "Criando conta..." : "Começar Grátis"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-zinc-500">
          Já tem uma conta?{" "}
          <Link to="/login" className="text-indigo-400 hover:text-indigo-300 font-medium">
            Fazer Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
