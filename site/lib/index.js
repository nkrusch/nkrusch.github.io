import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'
import basepath from 'remark-basepath'

import {basePath as bp} from '../next.config'

const rootDirectory = path.join(process.cwd(), '../')

export async function getIndexData() {
    const fullPath = path.join(rootDirectory, `index.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(basepath, {basePath: bp})
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        contentHtml,
        ...matterResult.data
    }
}
