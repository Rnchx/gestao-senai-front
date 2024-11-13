'use client';

import { useState } from "react";
import { useAuth } from '../authContext/user';
import axios from 'axios';

export const useLogin = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const logIn = async (cpf, password) => {
        const api = process.env.NEXT_PUBLIC_LOGIN
    
        setError(null);
        setIsLoading(true);   

        // console.log(api, "link para fazer o login do back");
        // console.log(cpf, "cpf do adiministrador");
        // console.log(password, "senha do adiministrador");

        try {
            const response = await axios.post(api, { cpf, password }, {
              
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              credentials: "include",
            });
        
            const { token } = response.data;
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
