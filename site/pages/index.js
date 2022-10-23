import Head from 'next/head'
import {renderToStaticMarkup} from 'react-dom/server'
import Layout, {siteTitle} from '../components/layout'
import Publications from '../components/pubs'
import Talks from "../components/talks";
import {getIndexData} from '../lib'

export default function Home({indexData}) {

    const pubs = <Publications data={indexData.bib}/>
    const talks = <Talks data={indexData.talks}/>
    const content = indexData.contentHtml
        .replace('<!-- PUB -->', renderToStaticMarkup(pubs))
        .replace('<!-- TALKS -->', renderToStaticMarkup(talks))

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <article>
                <div dangerouslySetInnerHTML={{__html: content}}/>
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
