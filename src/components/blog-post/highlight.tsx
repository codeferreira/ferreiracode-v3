import { PostModel } from 'models/post.model'
import Link from 'next/link'
import { useMemo } from 'react'

export function HighlightPost(post: PostModel) {
  const formattedDate = useMemo(() => {
    return new Date(post.metadata.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }, [post.metadata.date])

  return (
    <Link key={post.metadata.slug} href={`/blog/${post.metadata.slug}`}>
      <div className="flex gap-4">
        <img
          className="rounded-md min-w-sm max-h-40"
          src={post.metadata.thumbnail}
          alt=""
        />
        <section className="flex flex-col gap-2">
          <p>{formattedDate}</p>
          <h2 className="font-bold text-2xl leading-tight">
            {post.metadata.title}
          </h2>
          <h3 className="text-gray-300">{post.metadata.description}</h3>
        </section>
      </div>
    </Link>
  )
}
