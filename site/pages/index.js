import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import {getIndexData} from '../lib'

export default function Home({indexData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <article>
                <div dangerouslySetInnerHTML={{__html: indexData.contentHtml}}/>
            </article>
        </Layout>
    )
}

export async function getStaticProps() {
    const indexData = await getIndexData()
    return {
        props: {
            indexData
        }
    }
}
