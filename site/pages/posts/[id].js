import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import Presentation from "../../components/presentation";
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {

    const {title, date, presentation, contentHtml: __html} = postData;

    return (<Layout>
        <Head>
            <title>{title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={date}/>
            </div>
            {presentation && <Presentation {...postData} />}
            <div dangerouslySetInnerHTML={{__html}}/>
        </article>
    </Layout>)
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths, fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}
