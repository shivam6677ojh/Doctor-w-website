import React from 'react';

const BottomFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="container">
        <div className="bottom-footer-row top-section">
          <div className="bottom-footer-col links-col">
            <ul className="bottom-footer-menu">
              <li><a href="https://www.dragarwal.com/who-are-we/">About Us</a></li>
              <li><a href="https://www.dragarwal.com/support/">Support</a></li>
              <li><a href="https://www.dragarwal.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="https://www.dragarwal.com/terms-of-use/">Terms of Use</a></li>
              <li><a href="https://www.dragarwal.com/careers/">Careers</a></li>
              <li><a href="https://www.dragarwal.com/blogs/">Blogs</a></li>
              <li><a href="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2023/12/ODR-Portal.pdf" target="_blank" rel="noreferrer">ODR Portal</a></li>
            </ul>
          </div>
          <div className="bottom-footer-col social-col">
            <ul className="social-icons">
              <li>
                <a href="https://wa.me/917305827772?text=Hi" target="_blank" rel="noreferrer">
                  <img width="95" height="95" src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/08/whatsapp.svg" alt="Whatsapp" />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/DrAgarwalsEyeHospital" target="_blank" rel="noreferrer">
                  <img width="48" height="48" src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2020/12/facebook.svg" alt="facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dragarwalseye" target="_blank" rel="noreferrer">
                  <img width="48" height="48" src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2020/12/instagram.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/DrAgarwal%E2%80%99sEyeHospitalLimited" target="_blank" rel="noreferrer">
                  <img width="48" height="48" src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/01/youtube-icon.svg" alt="youtube" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/dr-agarwal's-eye-hospital" target="_blank" rel="noreferrer">
                  <img width="48" height="48" src="https://agarwals-219c6.kxcdn.com/wp-content/uploads/2023/03/Linkedin-1.svg" alt="linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bottom-footer-row bottom-section">
          <div className="bottom-footer-col copyright-col">
            <p className="copy-txt">©2025 - Dr.Agarwals | All right reserved</p>
          </div>
          <div className="bottom-footer-col help-col">
            <div className="help-text">
              Want Help? <a href="https://wa.me/917305827772?text=Hi" target="_blank" rel="noreferrer" className="help-link">Click Here</a> to chat with us on 
              <img width="25" height="25" src="https://agarwals-219c6.kxcdn.com/wp-content/themes/dragarwal/assets/img/wa-icon.png" className="wa-icon-small" alt="Whatsapp Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
