import React from 'react';

const Newsletter = () => {
  return (
    <div className="site-newsletter py-5 text-white" style={{ backgroundColor: '#071336' }}>
      <div className="footer-container">
        <div className="row align-items-center newsletter-row">
          <div className="col-md-6 pr-lg-5 newsletter-text">
            <h2 className="text-uppercase font-weight-bold newsletter-title">
              Subscribe to our newsletter
            </h2>
            <p className="h5 newsletter-desc">
              By subscribing to our mailing list you will always be updated with the latest news from us!
            </p>
          </div>
          <div className="col-md-5 newsletter-form-col">
            <form className="forminator-custom-form" onSubmit={(e) => e.preventDefault()}>
              <div className="forminator-row">
                <div className="forminator-field">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Enter your Email" 
                    className="forminator-input" 
                    required 
                  />
                </div>
              </div>
              
              <div className="forminator-row">
                <div className="recaptcha-wrapper">
                  {/* Visual Mock of reCAPTCHA */}
                  <div className="g-recaptcha-mock">
                    <div className="recaptcha-content">
                      <div className="recaptcha-checkbox"></div>
                      <span className="recaptcha-text">I'm not a robot</span>
                    </div>
                    <div className="recaptcha-logo">
                      <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" />
                      <div className="recaptcha-terms">reCAPTCHA <br/> Privacy - Terms</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="forminator-row forminator-row-last">
                <button className="forminator-button-submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
