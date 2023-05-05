import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'
import React from 'react'


const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
        </article>
    ))
  return (
    <section className='postsList'>
        <h2>FEED:</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList