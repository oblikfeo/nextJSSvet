'use client';
import { useState } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import { menu, profile, basket, search, ellipse } from '../icons/icons';
import About from '../about/about';

export default function Header() {
  const [pick, setPick] = useState('main');

  return (
    <div className={styles.wrapper}>
      <div className={styles.up}>
        <div className={styles.fon}>
          {
            <Image
              className={styles.img}
              src="/img/logo.png"
              alt="Logo"
              width={118}
              height={56}
              priority
            />
          }
        </div>
        <div className={styles.contacts}>
          <div className={styles.lampa} data-pick={pick}>
            {ellipse}
          </div>
          <div className={styles.menu}>
            <span
              onClick={() => setPick('main')}
              className={pick == 'main' ? styles.menuPick : ''}
            >
              Главная
            </span>
            <span
              onClick={() => setPick('catalog')}
              className={pick == 'catalog' ? styles.menuPick : ''}
            >
              Каталог
            </span>
            <span
              onClick={() => setPick('basket')}
              className={pick == 'basket' ? styles.menuPick : ''}
            >
              Корзина
            </span>
          </div>
          <a href="tel:+73812387535" className={styles.tel}>
            +7 (3812) 387-535
          </a>
        </div>
      </div>
      <div className={styles.down}>
        <div className={styles.flex}>
          <div className={styles.flex}>{menu}</div>
          <div className={styles.input}>
            <input placeholder="Поиск" type="text" />
            <div className={styles.svg}>{search}</div>
          </div>
          <div className={styles.flex}>
            {profile}
            {basket}
          </div>
        </div>
        <About />
      </div>
    </div>
  );
}
