import Link from "next/link";
import Date from './date'
import utilStyles from '../styles/utils.module.css'

const Talk = ({id, title, url, where, when}) => {
    return <div key={id} className={utilStyles.itemListItem}>
        <div>
            <Link href={url}>{`"${title}"`}</Link>
        </div>
        <div>
            <span>{where}</span>,{" "}
            <Date dateString={when} fmt={'LLLL yyyy'}/>.
        </div>
    </div>
}

export default function Talks({data}) {
    return <div className={utilStyles.itemList}>
        {data.map(item =>
            Object.entries(item).map(([key, entry]) =>
                <Talk id={key} {...entry}/>))}
    </div>
}
