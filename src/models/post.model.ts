import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type PostModel = {
  filepath: string
  metadata: {
    title: string
    slug: string
    thumbnail: string
    description: string
    isPublished: boolean
    date: Date
  }
  mdx: MDXRemoteSerializeResult
}
