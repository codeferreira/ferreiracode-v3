import { GetStaticProps, NextPage } from 'next'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import glob from 'fast-glob'
import matter from 'gray-matter'
import Link from 'next/link'

type Post = {
  filepath: string
  metadata: {
    title: string
    slug: string
    isPublished: boolean
    date: Date
  }
  mdx: MDXRemoteSerializeResult
}

type BlogHomeProps = {
  posts: Post[]
}

const BlogHome: NextPage<BlogHomeProps> = ({ posts }) => {
  return (
    <>
      <h1>Blog Home</h1>
      {!!posts.length &&
        posts.map((post) => (
          <Link
            className="px-4 py-3 border-solid border rounded-md border-gray-500"
            key={post.metadata.slug}
            href={`/blog/${post.metadata.slug}`}
          >
            <a>
              <h2>{post.metadata.title}</h2>
            </a>
          </Link>
        ))}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const files = glob.sync(`./src/posts/**/*.mdx`)

  const serializedContent = await Promise.all(
    files.map(async (filepath) => {
      const source = await fs.readFile(filepath)

      const { content, data } = matter(source)

      const serialized = await serialize(content)

      return {
        filepath,
        metadata: data,
        mdx: serialized,
      }
    })
  )

  return {
    props: {
      posts: JSON.parse(JSON.stringify(serializedContent)),
    },
  }
}

export default BlogHome
