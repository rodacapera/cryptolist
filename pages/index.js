import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Table from './components/table/index'

export default function Home() {

  return (
    <>
      <Head>
        <title>CriptoList</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Image src="/bg4.jpg" alt="Banner principal" width={100} height={10} layout="responsive" />
      
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Bienvenido a <a href="https://nextjs.org">Cripto list!</a>
          </h1>

          <p className={styles.description}>
            Encuentra en un solo sitio{' '}
            <code className={styles.code}>Todas las cripto monedas</code>
          </p>

          {/* <Link href="/description">Description</Link> */}

          <div className={styles.table}>
            <Table />
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  )
}
