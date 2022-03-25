import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import basepath from "remark-basepath";
import {basePath as bp} from "../next.config";

const postsDirectory = path.join(process.cwd(), '../posts')

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

async function ParseElement(matterData) {
    if (!matterData) return null;

    return (await unified()
        .use(basepath, {basePath: bp})
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(matterData))
        .toString()
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    let presentation = {}

    // Use remark to convert markdown into HTML string
    const contentHtml = await ParseElement(matterResult.content);
    presentation.preface = await ParseElement(matterResult.data.preface);
    presentation.abstract = await ParseElement(matterResult.data.abstract);
    presentation.abs_plain = matterResult.data.abstract || null;

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
        ...presentation
    }
}
