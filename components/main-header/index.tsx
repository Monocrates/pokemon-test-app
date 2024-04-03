import Link from 'next/link';
import React from 'react';

function MainHeader() {
  return (
    <header className="flex justify-between px-10 py-5">
      <Link href="/">Logo</Link>
      <nav>
        <ul className="flex">
          <li className="px-5">
            <Link href="/pokemon-list">Pokemon List</Link>
          </li>
          <li className="ps-5">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
