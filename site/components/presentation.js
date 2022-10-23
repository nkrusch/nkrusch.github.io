const newlines = text => text.replace(/\r\n|\r|\n/g, '<br/><br/>');

const Abstract = ({text}) => {
    return <div className={'abstract'}>
        <h3>Abstract</h3>
        <div dangerouslySetInnerHTML={{__html: newlines(text)}}/>
    </div>
}

const Preface = ({text}) => {
    return <div dangerouslySetInnerHTML={{__html: newlines(text)}}/>
}

const EmbedMedia = ({path, title}) => {
    return <div>
        {title && <h3>{title}</h3>}
        <div className="slides">
            <iframe src={`${path}#view=FitH`}/>
        </div>
        <br/>
        <div>
            <a className={'button'} href={path} target="_blank">Open in new tab</a>
            <span className={'button-spacer'}/>
            <a className={'button'} href={path} download>Download</a>
        </div>
    </div>
}

export default function Presentation(
    {preface, abstract, abs_plain, embed, embed_title}) {
    return <>
        {preface && <Preface text={preface}/>}
        {abstract && <Abstract text={abstract} plain={abs_plain}/>}
        {embed && <EmbedMedia path={embed} title={embed_title}/>}
    </>
}
