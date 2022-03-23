import Layout from '../../components/layout'
import {getAllPostIds, getPostData} from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

const Abstract = ({text}) => {
    const __html = text.replace(/\r\n|\r|\n/g, '<br/><br/>');
    return <div className={'abstract'}>
        <h3>Abstract</h3>
        <div dangerouslySetInnerHTML={{__html}}/>
    </div>
}

const EmbedMedia = ({path, title}) => {
    const src = `${path}#view=FitH`
    return <div>
        {title && <h3>{title}</h3>}
        <a href={path} target="_blank">open in new tab</a><br/><br/>
        <div className="slides">
            <iframe src={src}/>
        </div>
    </div>
}

const Presentation = ({preface, abstract, embed, embed_title}) => {
    return <>
        {preface && <p dangerouslySetInnerHTML={{__html:preface}}/>}
        {abstract && <Abstract text={abstract}/>}
        {embed && <EmbedMedia path={embed} title={embed_title}/>}
    </>
}

export default function Post({postData}) {
    return (<Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date}/>
            </div>
            {(postData.presentation) && <Presentation {...postData} />}
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}/>
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
