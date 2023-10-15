import Image from 'next/image';
import React from 'react';
import { signIn } from 'next-auth/react';

import headerLogo from '../icons/HeaderLogo.svg';
import Link from 'next/link';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { LogoutSvg } from '../icons/LogoutSvg';

export const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="TCM__header">
      <p className="TCM__header_systemName">Видеонаблюдение транспортной платформы г. Казань</p>
      <div className="TCM__header-right">
        <div className="TCM__header-links">
          <Link
            className={clsx('TCM__header-link', {
              'TCM__header-link_active': pathname === '/openmap',
            })}
            href={'/openmap'}
          >
            Карта камер
          </Link>
        </div>
        <button className="TCM__header-button">
          <span className="TCM__header-button_title">Выйти</span> <LogoutSvg />
        </button>
      </div>
    </header>
  );
};
