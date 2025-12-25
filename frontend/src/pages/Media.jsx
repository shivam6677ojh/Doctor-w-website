import React from 'react'
import mediaNews from '../data/mediaNews'

const breadcrumbSchema = {
  '@context': 'https://schema.org/',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: '/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'News & Media',
      item: '/media',
    },
  ],
}

const Media = () => {
  return (
    <div className="media-page">
      <section className="static-banner events-banner media-banner pt-lg-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <ul className="bread-ul breadcrumb-list">
                <li>
                  <a itemProp="url" href="/">
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <span>News &amp; Media</span>
                </li>
              </ul>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
              />
            </div>
          </div>
          <div className="banner-content d-flex">
            <div className="banner-txt align-self-end">
              <h1>News &amp; Media</h1>
              <p className="media-intro">
                Highlights, announcements, and press moments from Dr Agarwals Eye Hospital network.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="media-section">
        <div className="container">
          <div className="media-grid">
            {mediaNews.map((item) => (
              <article className="media-card" key={item.link}>
                <div className="media-card-image">
                  <a href="/media">
                    <img src={item.image} alt={item.alt || item.title} loading="lazy" />
                  </a>
                </div>
                <div className="media-card-body">
                  <p className="media-card-date">{item.date}</p>
                  <h3>
                    <a href="/media">
                      {item.title}
                    </a>
                  </h3>
                </div>
                <div className="media-card-footer">

                 <div className='inside'>
                    <a href="/media">
                      Read More
                    </a>
                 </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Media
