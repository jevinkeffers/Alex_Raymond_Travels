import React from 'react'

const Post = ({article}) => {
    console.log(article)
    const { headline, featuredImage, subhead, location, body } = article.fields
    // const postBody = marked(body)
    return (
        <div className='post'>
            <h2 className='title'>{headline}</h2>
            {featuredImage && <img className='featuredImage' src={featuredImage.fields.file.url} alt={headline} title={headline} />}
            <section dangerouslySetInnerHTML={{ __html: body  }} />
        </div>
    )
}

export default Post 