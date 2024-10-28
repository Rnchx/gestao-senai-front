'use client';

import { useState } from "react";
import { useAuth } from '../authContext/user';

export const useLogin = () => {
    const { login } = useAuth(); // Usar a função de login do contexto
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const logIn = async (cpf, password) => {
        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch(process.env.login, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ cpf, password }),
            });

            if (!response.ok) {
                throw new Error("Falha na autenticação");
            }

            const data = await response.json();
            const token = data.token;

            login(token); // Salva o token no contexto

            return true; // Login bem-sucedido
        } catch (err) {
            setError(err.message);
            return false; // Falha no login
        } finally {
            setIsLoading(false);
        }
    };

    return { logIn, error, isLoading };
};
