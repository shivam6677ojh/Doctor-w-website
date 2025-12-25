import React from 'react';
import { treatments } from '../data/treatments';

export default function EyeTreatment() {
  return (
    <main>
      <section className="static-banner treatment-bannerc pt-lg-5 pb-lg-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <ul className="bread-ul">
                <li><a href="/"><span>Home</span></a></li>
                <li><span>Eye Treatments &amp; Surgery</span></li>
              </ul>
              {/* Breadcrumb structured data */}
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
                  { "@type": "ListItem", "position": 2, "name": "Eye Treatments & Surgery", "item": "/eye-treatment" }
                ]
              }) }} />
            </div>
          </div>
          <div className="banner-content d-flex">
            <div className="banner-txt align-self-end">
              <h1 className="primary-heading">Eye Treatments &amp; Surgery</h1>
              <p>
                From routine eye tests and eye check-ups to critical surgical interventions, our hospitals provide a holistic
                treatment for your eyes. We also offer a wide range of laser surgeries – LASIK, Intralase, Relex Smile &amp; Contura
                for refraction correction. Read more about the various techniques and treatments offered by our super speciality
                doctors and technicians using the latest technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder content blocks for treatment categories */}
      <section className="card-section">
        <div className="container">
          <div className="treatment-section">
            <div className="row cardbox-row pb-5 treatment-results">
              {treatments.map((t, idx) => (
                <div key={idx} className="col-12 col-md-12 col-lg-4">
                  <div className="cardbox">
                    <div className="cardbox-content">
                      <div className="cardbox-header">
                        <h2 className="font-weight-bold mb-2">
                          <a className="text-black" href={t.url}>
                            {t.title}
                          </a>
                        </h2>
                        {t.subtitle && <span>{t.subtitle}</span>}
                      </div>
                      <div className="cardbox-body">
                        <p>{t.desc}</p>
                      </div>
                      <a href={t.url} className="cardbox-footer">Learn more about {t.title}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
