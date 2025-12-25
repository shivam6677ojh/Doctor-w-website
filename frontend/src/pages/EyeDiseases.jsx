import React from 'react';
import { diseases } from '../data/diseases';

export default function EyeDiseases() {
  return (
    <main>
      <section className="static-banner treatment-bannerc pt-lg-5 pb-lg-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-3">
              <ul className="bread-ul"><li><a href="/"><span>Home</span></a></li><li><span>Eye Diseases</span></li></ul>
            </div>
          </div>
          <div className="banner-content d-flex">
            <div className="banner-txt align-self-end">
              <h1 className="primary-heading">Eye Diseases</h1>
              <p>
                Eye conditions, however big or small, need timely attention and adequate care. At Dr Agarwals Eye Hospitals, we have specialists
                experienced in treating all eye-related conditions. Read all about eye conditions, symptoms to watch out for, treatment options,
                and frequently asked questions (FAQs).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="card-section">
        <div className="container">
          <div className="treatment-section" data-aos="fade-up">
            <div id="menu-accordion" className="row cardbox-row pb-5 disease-results">
              {diseases.map((d, idx) => (
                <div key={idx} className="col-12 col-md-12 col-lg-4">
                  <div className="cardbox">
                    <div className="cardbox-content">
                      <div className="cardbox-header">
                        <h4 className="font-weight-bold mb-2">
                          <a className="text-black" href={d.url}>{d.title}</a>
                        </h4>
                        {d.subtitle && <span>{d.subtitle}</span>}
                      </div>
                      <div className="cardbox-body">
                        <p>{d.desc}</p>
                      </div>
                      <div className="d-flex">
                        <a href={d.url} className="cardbox-footer align-self-center">Learn more about {d.title}</a>
                      </div>
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
