import rss from "@astrojs/rss";

import { filterPosts } from "../js/utils";

const postImportResult = import.meta.glob("./blog/**/*.md", { eager: true });
const posts = filterPosts(Object.values(postImportResult));

export function GET(context) {
    return rss({
        stylesheet: "./rss.xsl",
        title: "My Astro Blog",
        description: "A humble Astronaut’s guide to the stars",
        site: import.meta.env.SITE,
        items: posts.map((post) => ({
            link: post.url,
            title: post.frontmatter.title,
            pubDate: post.frontmatter.date,
            description: post.frontmatter.description,
            customData: `
      <author>${post.frontmatter.author}</author>
    `,
        })),
    });
}
