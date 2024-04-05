import Link from "next/link";

import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        <img src={logoImg.src} alt="a plate with food in it." />
        Next Level Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/meals">
              Browse Meals
            </Link>
          </li>
          <li>
            <Link href="/community">
              Foodies Community
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}