import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'
import Head from 'next/head'

export const MainLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main className={styles.main}>
                <div className={styles.description}>
                    {children}
                </div>
            </main>
        </>
    )
}

