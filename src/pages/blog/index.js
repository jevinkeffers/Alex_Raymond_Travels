import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow:
                'rgb(0, 0, 0) 0rem 0px 0px, rgb(0, 0, 0) -0.0rem 0px 0px',
              backgroundColor: 'rgb(0, 0, 0)',
              color: 'white',
              lineHeight: '1',
              padding: '0.25em',
              textAlign: 'center',
            }}
          >
            From The Newsletter
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
        
      </Layout>
    )
  }
}
