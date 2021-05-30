import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
// import { getSortedPostsData } from '../lib/posts'
import { getIndexData } from '../lib'
// import Link from 'next/link'
// import Date from '../components/date'

export default function Home({ indexData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <article>
        <div dangerouslySetInnerHTML={{ __html: indexData.contentHtml }} />
      </article>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
    </Layout>
  )
}

export async function getStaticProps() {
  // const allPostsData = getSortedPostsData()
  const indexData = await getIndexData()
  return {
    props: {
      // allPostsData,
      indexData
    }
  }
}
