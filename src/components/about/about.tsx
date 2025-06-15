'use client';
import styles from './about.module.css';
import Image from 'next/image';
import { svg01 } from '../icons/icons';

export default function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>{svg01}</div>
      <div className={styles.right}>
        <Image
          className={styles.img}
          src="/img/lampa.png"
          alt="Logo"
          width={500}
          height={500}
          priority
          style={{ width: 'auto', height: 'auto', marginLeft: 'auto' }}
        />
      </div>
    </div>
  );
}
