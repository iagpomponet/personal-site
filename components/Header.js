import styles from '../styles/Header.module.css'
import Link from 'next/link'

function Header(){
  return (
    <header className={styles.header}>
      <div className={styles.container}>
          <nav className={styles.nav}>
            <ul>
              <li>
              <Link href="/">
                  <a>
                    Home
                  </a>
                </Link>
              </li>
              <li>
              <Link href="/blog">
                  <a>
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>
                    Sobre
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contato">
                  <a>
                    Entre em contato
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
      </div>
    </header>
  )
};

export default Header;