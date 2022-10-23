import { parseISO, format } from 'date-fns'

export default function Date({ dateString, fmt='LLLL d, yyyy' }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, fmt)}</time>
}
