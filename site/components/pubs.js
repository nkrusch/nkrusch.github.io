import Href from './extLink'
import utilStyles from '../styles/utils.module.css'

const Pub = ({id, title, url, venue, venue_url, author, note, links}) => {
    return <div key={id} className={utilStyles.itemListItem}>
        <div>
            {url ? <Href href={url} label={`${title}`}
                         className={utilStyles.paperTitle}/> :
                <span className={utilStyles.paperTitle}>
                        {title}</span>}
            {venue ?
                <> at {venue_url ?
                        <Href href={venue_url} label={venue}/> : venue}
                </> : null}.
        </div>
        <div>{author}</div>
        {note ? <div><i>Note{":"} {note}</i></div>: null}
        {links ? <div className={utilStyles.pubLinks}>
                {Object.entries(links).map(
                    ([label, url]) => {
                        return <Href
                            key={label}
                            href={url}
                            label={label.replaceAll("_", " ")}
                            className={utilStyles.pubLinks_a}/>
                    })}

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
