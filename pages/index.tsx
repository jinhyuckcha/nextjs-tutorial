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
          {makeCard({title: 'core-api swagger', description: '', link: 'http://dingo.dev.superb-ai.com/core-api/docs/'})}
          {makeCard({title: 'query-api swagger', description: '', link: 'http://dingo.dev.superb-ai.com/query-api/docs/'})}
          {makeCard({title: 'shiba-api swagger', description: '', link: 'http://shiba.dev.superb-ai.com/docs/'})}
          {makeCard({title: 'prometheus', description: '', link: 'http://monitoring.dev.superb-ai.com/prometheus'})}
          {makeCard({title: 'alert manager', description: '', link: 'http://monitoring.dev.superb-ai.com/alertmanager'})}
          {makeCard({title: 'kafka-ui', description: '', link: 'http://monitoring.dev.superb-ai.com/kafkaui'})}
          {makeCard({title: 'kibana', description: '', link: 'http://monitoring.dev.superb-ai.com/kibana'})}
          {makeCard({title: 'grafana', description: '', link: 'http://monitoring.dev.superb-ai.com/grafana'})}
          {makeCard({title: 'cmak', description: '', link: 'http://monitoring.dev.superb-ai.com/cmak'})}
          {makeCard({title: 'cloudbeaver', description: '', link: 'http://monitoring.dev.superb-ai.com/cloudbeaver'})}
        </div>
      </main>
    </div>
  )
}

export default Home
