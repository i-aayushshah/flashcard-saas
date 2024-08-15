import React from 'react';
import Link from 'next/link';
import { useAuth } from '../utils/hooks/useAuth'; // Adjust path as needed
import ThemeToggle from './ui/ThemeToggle';
import Navbar from './ui/Navbar';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="header">
      <div className="header-content">
        <Link href="/" className="logo">
          Flashcard SaaS
        </Link>
        <Navbar />
        <div className="header-actions">
          {user ? (
            <>
              <span>{user.displayName}</span>
              <button onClick={signOut}>Sign Out</button>
            </>
          ) : (
            <Link href="/auth/signin">
              Sign In
            </Link>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
