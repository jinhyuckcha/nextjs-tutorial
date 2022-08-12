import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

interface ICard {
  title: string
  description: string
  link: string
}

function makeCard(card: ICard) {
  return (
      <a href={card.link} className={styles.card}>
        <h2>{card.title} &rarr;</h2>
        <p>{card.description}</p>
      </a>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dataops Monitoring</title>
        <meta name="description" content="Dataops monitoring tool page" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Dataops Monitoring tools
        </h1>

        <p className={styles.description}>
          {/* Get started by editing */}
          {/* <code className={styles.code}>pages/index.tsx</code> */}
        </p>

        <div className={styles.grid}>
          {makeCard({title: 'core-api swagger', description: 'core-api swagger', link: '/monitoring'})}
          {makeCard({title: 'core-api swagger', description: 'core-api swagger', link: '/monitoring'})}
          {makeCard({title: 'core-api swagger', description: 'core-api swagger', link: '/monitoring'})}
          {makeCard({title: 'core-api swagger', description: 'core-api swagger', link: '/monitoring'})}
        </div>
      </main>
    </div>
  )
}

export default Home
