import { GetStaticProps, NextPage } from 'next'
import { promises as fs } from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import glob from 'fast-glob'
import matter from 'gray-matter'
import Header from 'components/header'
import { HighlightPost } from 'components/blog-post'
import { PostModel } from 'models/post.model'

type BlogHomeProps = {
  posts: PostModel[]
}

const BlogHome: NextPage<BlogHomeProps> = ({ posts }) => {
  return (
    <section className="max-w-screen-2xl px-10 m-auto font-Montserrat bg-white">
      <Header />
      <main className="flex flex-col justify-center max-w-3xl m-auto gap-4">
        <h1 className="text-2xl mb-7 text-purple-700 font-bold">Blog</h1>
        {!!posts.length &&
          posts.map((post) => (
            <HighlightPost key={post.metadata.slug} {...post} />
          ))}
      </main>
    </section>
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
