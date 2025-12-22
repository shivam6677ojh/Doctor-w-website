import React from 'react'
import blogCategories from '../data/blogCategories'

const socialLinks = [
  {
    href: 'https://www.facebook.com/DrAgarwalsEyeHospital',
    icon: 'https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/default_facebook.png',
    label: 'Facebook'
  },
  {
    href: 'https://twitter.com/dragarwals_eye',
    icon: 'https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/default_twitter.png',
    label: 'Twitter'
  },
  {
    href: "https://www.linkedin.com/company/dr-agarwal's-eye-hospital",
    icon: 'https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/default_linkedin.png',
    label: 'LinkedIn'
  },
  {
    href: 'https://www.instagram.com/dragarwalseye',
    icon: 'https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/default_instagram.png',
    label: 'Instagram'
  }
]

const Blogs = () => {
  return (
    <div className="blogs-wrapper">
      <section id="blog_listing" className="static-banner events-banner blog-banner pt-lg-5 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <ul className="bread-ul breadcrumb-list">
                <li><a itemProp="url" href="/"><span>Home</span></a></li>
                <li><span>&gt;</span></li>
                <li><span>All about eyes!</span></li>
              </ul>
            </div>
          </div>
          <div className="row align-items-start">
            <div className="col-md-9">
              <div className="banner-content">
                <div className="banner-txt">
                  <h1 className="primary-heading">All about eyes!</h1>
                  <p>Did you know that eyes are the most complex sensory organ of the body?</p>
                  <p>Powered by the strongest and fastest muscles in the body, your eyes are made up of – believe it or not – four million working parts and detect over 10 million colours! Capable of processing and delivering 1500 pieces of information to the brain every minute, your eyes capture your life like a video camera.</p>
                  <p>Here is a collection of articles that cover a range of topics from eye-care tips to eye treatments.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="blogs-follow-card">
                <h5>Follow Us</h5>
                <ul className="blogs-follow-list">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <a href={social.href} target="_blank" rel="noreferrer noopener">
                        <img width="35" height="35" src={social.icon} alt={social.label} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          {blogCategories.map((category) => (
            <div className="blog-category-block" key={category.id}>
              <div className="blog-category-header">
                <div>
                  <p className="category-label">Category</p>
                  <h2>{category.title}</h2>
                </div>
                <a className="category-view-all" href={category.viewAll} target="_blank" rel="noreferrer noopener">
                  View all
                  <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="blog-card-grid">
                {category.posts.map((post) => (
                  <article className="blog-card" key={post.link}>
                    <a className="blog-card-media" href={post.link} target="_blank" rel="noreferrer noopener">
                      <img src={post.image} alt={post.title} loading="lazy" />
                    </a>
                    <div className="blog-card-body">
                      <p className="blog-card-date">{post.date}</p>
                      <h3>
                        <a href={post.link} target="_blank" rel="noreferrer noopener">{post.title}</a>
                      </h3>
                      <p className="blog-card-description">{post.description}</p>
                      <a className="blog-card-link" href={post.link} target="_blank" rel="noreferrer noopener">
                        Read article
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blogs
