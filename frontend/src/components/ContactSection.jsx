import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-box">
          <img 
            src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/03/contact-e1614845702326.png" 
            className="contact-bg-img" 
            alt="Message Icon" 
          />
          <div className="contact-row">
            <div className="contact-col-left">
              <div className="contact-text">
                <h2 className="contact-heading">Contact Us</h2>
                <p className="contact-subheading">
                  We'd love to hear from you. For feedback, queries or help with booking appointments, please get in touch.
                </p>
              </div>
            </div>
            <div className="contact-col-right">
              <div className="contact-details">
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/icons-map.svg" alt="Location" />
                  </div>
                  <div className="contact-info">
                    <h4>Registered Office, Chennai</h4>
                    <p>1st & 3rd Floor, Buhari Towers, No.4, Moores Road, Off Greams Road, Near Asan Memorial School, Chennai – 600006, Tamilnadu</p>
                    
                    <h4 className="mt-3">Mumbai Office</h4>
                    <p>Mumbai Corporate Office: No 705, 7th Floor, Windsor, Kalina, Santacruz (East), Mumbai – 400098.</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/icons-phone.svg" alt="Phone" />
                  </div>
                  <div className="contact-info">
                    <h4>9594924026</h4>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <img src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/icons-mail.svg" alt="Email" />
                  </div>
                  <div className="contact-info">
                    <h4><a href="mailto:info@dragarwal.com">info@dragarwal.com</a></h4>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
