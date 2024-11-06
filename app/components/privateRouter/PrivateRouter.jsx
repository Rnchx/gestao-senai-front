'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PrivateRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/');
    }
  }, [router]);

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return null;
    }
  }

  return children;
}