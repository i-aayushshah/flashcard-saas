// utils/hooks/useAuth.js
import { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Adjust the import according to your setup

// Example useAuth hook implementation
export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  return { user };
};
