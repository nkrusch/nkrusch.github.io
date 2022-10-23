export default function Href(
    {
        label, href, pref = '', post = '', ...rest
    }) {
    return <a href={href} target="_blank"
              nofollow
              noreferrer {...rest}>{pref}{label}{post}</a>
}