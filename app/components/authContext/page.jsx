'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';

// Criando o contexto
const AuthContext = createContext();

// Provider para o AuthContext
export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const router = useRouter();

    // Carregar o token do localStorage quando a aplicação inicia
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setAuthToken(token);
        }
    }, []);

    // Função para login que armazena o token no estado e no localStorage
    const login = (token) => {
        localStorage.setItem('authToken', token);
        setAuthToken(token);
    };

    // Função para logout que remove o token
    const logout = () => {
        localStorage.removeItem('authToken');
        setAuthToken(null);
        router.push('/login'); // Redireciona para o login após logout
    };

    // Função para verificar se o usuário está autenticado
    const isAuthenticated = () => !!authToken;

    return (
        <AuthContext.Provider value={{ authToken, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);
