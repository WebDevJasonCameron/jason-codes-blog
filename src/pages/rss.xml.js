import rss from '@astrojs/rss';

import { formatBlogPosts } from "../js/utils.js"

const postImportResult = import.meta.glob('./**/*.md', { eager: true });
const posts = formatBlogPosts(Object.values(postImportResult));

export const GET = () => rss({
    stylesheet: '/rss/styles.xsl',
    title: 'Jason - Codes | Blog',
    description: 'My continued learning and ideas...',
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
        link: post.url,
        title: post.frontmatter.title,
        pubDate: post.frontmatter.date,
        description: post.frontmatter.description,
        customData: `
      <author>${post.frontmatter.author}</author>
    `
    }))
});