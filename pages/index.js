import styles from '../styles/Index.module.css'
import Head from 'next/head'

// import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Iago Pomponet</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
        <meta name="keywords" content="web development, programming" />
      </Head>
      <div class="home">
        <section class={styles.firstSection}>
            <div class={styles.container}>
                <h1>Iago Pomponet</h1>
                <small>Frontend engineer ☕</small>
            </div>
        </section>
        <section class={styles.projectsSection}>
            <div class={styles.container}>
                <h3>Projects:</h3>
                <ul>
                  <li>
                    {/* <ProjectCard title="Movie App" /> */}
                  </li>
                </ul>
            </div>
        </section>
      </div>
    </div>
  )
}
