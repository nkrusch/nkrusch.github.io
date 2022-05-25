import Head from 'next/head'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Neea Rusch'
const description = 'Homepage'
export const siteTitle = name

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <meta name="og:title" content={siteTitle}/>
                <meta name="description" content={description}/>
                <meta name="twitter:card" content="summary_large_image"/>
                <title>{siteTitle}</title>
            </Head>
            <header className={styles.header}>{
                home ? (<h1 className={utilStyles.heading2Xl}>{name}</h1>) :
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
            } </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Return</a>
                    </Link>
                </div>
            )}
        </div>
    )
}
