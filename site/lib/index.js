import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import basepath from 'remark-basepath'
import {basePath as bp} from '../next.config'

const yaml = require('js-yaml');

const rootDirectory = path.join(process.cwd(), './')
const dataDirectory = path.join(process.cwd(), '../data')

export async function getIndexData() {
    const fullPath = path.join(rootDirectory, `../index.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const bib = yaml.load(fs.readFileSync(
        path.join(dataDirectory, `pub_list.yml`),
        'utf8'), null)
    const talks = yaml.load(fs.readFileSync(
        path.join(dataDirectory, `talks.yml`),
        'utf8'), null)

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const contentHtml = (await unified()
        .use(basepath, {basePath: bp})
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, {allowDangerousHtml: true})
        .use(rehypeStringify, {allowDangerousHtml: true})
        .process(matterResult.content))
        .toString()

    // Combine the data with the id and contentHtml
    return {
        contentHtml,
        bib, talks,
        ...matterResult.data
    }
}
