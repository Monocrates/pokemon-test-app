import { Separator } from '@radix-ui/themes';
import Link from 'next/link';
import React, { Fragment } from 'react';

function MainHeader() {
  return (
    <Fragment>
      <header className="flex justify-between px-10 py-5">
        <Link href="/">Logo</Link>
        <nav>
          <ul className="flex">
            <li className="px-5">
              <Link href="/pokemon-master-register">Pokemon Master Register</Link>
            </li>
            <li className="px-5">
              <Link href="/pokemon-list">Pokemon List</Link>
            </li>
            <li className="ps-5">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Separator size="4" />
    </Fragment>
  );
}

export default MainHeader;
