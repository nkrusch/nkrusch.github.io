import Href from './extLink'
import utilStyles from '../styles/utils.module.css'

const Pub = (
    {
        id, title, url, venue, venue_url, author, paper, slides, code,
        demo
    }) => {
    return <div key={id} className={utilStyles.itemListItem}>
        <div>
            <Href href={url} label={`"${title}"`}/>
            {venue ?
                <> at <Href href={venue_url} label={venue}/></>
                : null}.
        </div>
        <div>{author}</div>
        {(paper || slides || code || demo) ?
            <div className={utilStyles.pubLinks}>
                {paper ? <Href href={paper} label="paper" pref={'['}
                post={']'} className={utilStyles.pubLinks_a}/> : null}
                {slides ? <Href href={slides} label="slides" pref={'['}
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
