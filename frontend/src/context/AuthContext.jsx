import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await fetchProfile(session.user.id);
        } else {
          setProfile(null);
        }
        setLoading(false);
      }
    );

    return () => subscription?.unsubscribe();
  }, []);

  const fetchProfile = async (userId) => {
    try {
      const { data, error: err } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (err) throw err;
      setProfile(data);
    } catch (err) {
      console.error('Error fetching profile:', err);
      setError(err.message);
    }
  };

  const signUp = async (email, password, fullName, companyName) => {
    try {
      setError(null);
      const { data: { user: authUser }, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      if (authUser) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([{
            id: authUser.id,
            email,
            full_name: fullName,
            company_name: companyName,
          }]);

        if (profileError) throw profileError;
      }

      return { user: authUser, error: null };
    } catch (err) {
      const message = err.message || 'Erro ao registrar';
      setError(message);
      return { user: null, error: message };
    }
  };

  const signIn = async (email, password) => {
    try {
      setError(null);
      const { data: { user: authUser }, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      return { user: authUser, error: null };
    } catch (err) {
      const message = err.message || 'Erro ao fazer login';
      setError(message);
      return { user: null, error: message };
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser(null);
      setProfile(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateProfile = async (updates) => {
    try {
      setError(null);
      const { error } = await supabase
        .from('user_profiles')
        .update(updates)
        .eq('id', user.id);

      if (error) throw error;
      await fetchProfile(user.id);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      profile,
      loading,
      error,
      signUp,
      signIn,
      signOut,
      updateProfile,
      isAuthenticated: !!user,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
