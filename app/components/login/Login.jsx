'use client';

import { useState } from "react";
import { useAuth } from '../authContext/user';
import axios from 'axios';

export const useLogin = () => {
  const { login, logout } = useAuth();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const logIn = async (cpf, password) => {
    const api = process.env.NEXT_PUBLIC_LOGIN

    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post(`http://localhost:4000/login`, { cpf, password }, {

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

  const logOut = async () => {
    try {
      setIsLoading(true);
      await logout();
      window.location.href = '/';
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { logIn, logOut, error, isLoading }
};
