import React from 'react'
import PopularSearch from '../components/PopularSearch'

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
      name: 'Eye Test',
      item: '/eye-test',
    },
  ],
}

const eyeTests = [
  {
    title: 'Visual Acuity Test (Near Vision)',
    description: 'Refractive errors are one of the most common problems people face in the ophthalmological field....',
    link: 'https://www.dragarwal.com/eye-test/visual-acuity-test/',
    cta: 'Learn more about Visual Acuity Test (Near Vision)',
  },
  {
    title: 'Retina Test',
    description: 'As a common person, we carry a generalized perception that eye tests are done only...',
    link: 'https://www.dragarwal.com/eye-test/retina-test/',
    cta: 'Learn more about Retina Test',
  },
  {
    title: 'Squint Test',
    description: 'A squint, also known as strabismus, is when the two eyes are not aligned in...',
    link: 'https://www.dragarwal.com/eye-test/squint-test/',
    cta: 'Learn more about Squint Test',
  },
  {
    title: 'Slit Lamp Test',
    description: 'Slit lamp Examination: Explained The diagnosis stage is a crucial step in every treatment procedure,...',
    link: 'https://www.dragarwal.com/eye-test/slit-lamp-test/',
    cta: 'Learn more about Slit Lamp Test',
  },
  {
    title: 'Glaucoma Testing',
    description: 'The eye is considered to be the most sensitive organ of the human body. Similar...',
    link: 'https://www.dragarwal.com/eye-test/glaucoma-eye-test/',
    cta: 'Learn more about Glaucoma Testing',
  },
]

const EyeTest = () => {
  return (
    <div className="eye-test-page">
      <section className="eye-banner">
        <div className="container">
          <ul className="bread-ul">
            <li>
              <a href="/">
                <span>Home</span>
              </a>
            </li>
            <li>
              <span>Eye Test</span>
            </li>
          </ul>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

          <div className="eye-banner-content" role="region" aria-label="Eye Test introduction">
            <h1 className="primary-heading">Eye Test</h1>
            <p>
              An eye exam involves a series of tests to evaluate your vision and check for eye diseases. Each test during
              an eye exam evaluates a different aspect of your vision or eye health. The diagnosis stage is a crucial step
              in every treatment procedure and that is why the below tests will give you substantial information on the
              different types of Eye tests, why they are done, how they are done, how to prepare for an eye test, and the
              advanced treatments available. Read ahead to know more.
            </p>
          </div>
        </div>
      </section>

      <section className="eye-card-section">
        <div className="container">
          <div className="eye-card-grid">
            {eyeTests.map((test) => (
              <article className="eye-card" key={test.title}>
                <header>
                  <h2>
                    <a href="/eye-test" className="eye-card-title-link">
                      {test.title}
                    </a>
                  </h2>
                </header>
                <p>{test.description}</p>
                <a className="eye-card-link" href="/eye-test">
                  {test.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PopularSearch />
    </div>
  )
}

export default EyeTest
