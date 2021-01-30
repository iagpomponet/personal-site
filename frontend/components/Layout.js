import styles from '../styles/Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <main class={styles.main}>
        {children}
      </main>
    </div>
  )
}

export default Layout;