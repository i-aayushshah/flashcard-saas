import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <Link href="/flashcards" className="sidebar-link">
              Flashcards
            </Link>
          </li>
          <li>
            <Link href="/decks" className="sidebar-link">
              Decks
            </Link>
          </li>
          <li>
            <Link href="/analytics" className="sidebar-link">
              Analytics
            </Link>
          </li>
          <li>
            <Link href="/collaboration" className="sidebar-link">
              Collaboration
            </Link>
          </li>
          <li>
            <Link href="/payments" className="sidebar-link">
              Payments
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
