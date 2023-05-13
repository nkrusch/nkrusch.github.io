import Href from './extLink'
import utilStyles from '../styles/utils.module.css'

const Pub = (
    {
        id, title, url, venue, venue_url, author, paper, slides, code,
        demo, artifact, preprint
    }) => {
    return <div key={id} className={utilStyles.itemListItem}>
        <div>
            { url ? <Href href={url} label={`${title}`}
                      className={utilStyles.paperTitle}/> :
                    <span className={utilStyles.paperTitle}>
                        {title}</span> }
            {venue ?
                <> at { venue_url ?
                    <Href href={venue_url} label={venue}/> : venue }
                </> : null}.
        </div>
        <div>{author}</div>
        {(paper || slides || code || demo || artifact || preprint) ?
            <div className={utilStyles.pubLinks}>
                {paper ? <Href href={paper} label="paper" pref={'['}
                post={']'} className={utilStyles.pubLinks_a}/> : null}
                {preprint ? <Href href={preprint} label="preprint" pref={'['}
                post={']'} className={utilStyles.pubLinks_a}/> : null}
                {slides ? <Href href={slides} label="slides" pref={'['}
                post={']'} className={utilStyles.pubLinks_a}/> : null}
                {artifact ? <Href href={artifact} label="artifact" pref={'['}
                post={']'} className={utilStyles.pubLinks_a}/> : null}
                {code ? <Href href={code} label="code" pref={'['}
                post={']'} className={utilStyles.pubLinks_a}/> : null}
                {demo ? <Href href={demo} label="demo" pref={'['}
                post={']'} className={utilStyles.pubLinks_a}/> : null}
            </div> : null}
    </div>
}

export default function Publications({data}) {
    return <div className={utilStyles.itemList}>
        {data.map(item =>
            Object.entries(item).map(([key, entry]) =>
                <Pub id={key} {...entry}/>))}
    </div>
}
