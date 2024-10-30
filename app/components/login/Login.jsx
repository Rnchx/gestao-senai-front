'use client';

import { useState } from "react";
import { useAuth } from '../authContext/user';

export const useLogin = () => {
    const { login } = useAuth(); // Usar a função de login do contexto
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const logIn = async (cpf, password) => {
        const api = process.env.NEXT_PUBLIC_LOGIN

        setError(null);
        setIsLoading(true);

        try {
            const response = await fetch(api, {
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

            login(token);

            return true;
        } catch (err) {
            setError(err.message);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    return { logIn, error, isLoading };
};
