import Href from "./extLink";

const newlines = text => text.replace(/\r\n|\r|\n/g, '<br/><br/>');

const Abstract = ({text}) => {
    return <div className={'abstract'}>
        <h3>Abstract</h3>
        <div dangerouslySetInnerHTML={{__html: newlines(text)}}/>
    </div>
}

const PaperLink = ({paper, title}) => {
    return <div className={'paper'}>
        <h3>Paper</h3>
        <Href href={paper} label={title || paper}/>
    </div>
}

const Preface = ({text}) => {
    return <div dangerouslySetInnerHTML={{__html: newlines(text)}}/>
}

const EmbedMedia = ({path, title, ratio}) => {
    return <div>
        {title && <h3>{title}</h3>}
        <div className={`slides ratio_${ratio}`}>
            <iframe src={`${path}#view=FitH`}/>
        </div>
        <br/>
        <div>
            <a className={'button'} href={path} target="_blank">Open in
                new tab</a>
            <span className={'button-spacer'}/>
            <a className={'button'} href={path} download>Download</a>
        </div>
    </div>
}

export default function Presentation(
    {
        preface,
        abstract,
        abs_plain,
        embed,
        embed_title,
        embed_ratio,
        paper,
        paper_title
    }) {
    return <>
        {preface && <Preface text={preface}/>}
        {abstract && <Abstract text={abstract} plain={abs_plain}/>}
        {paper && <PaperLink paper={paper} title={paper_title}/>}
        {embed && <EmbedMedia
            path={embed} title={embed_title}
            ratio={embed_ratio || "34"}/>}
    </>
}
