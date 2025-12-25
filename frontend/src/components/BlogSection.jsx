import React, { useState, useEffect } from 'react';

const blogData = [
  {
    id: 1,
    date: "Tuesday, 2 Dec 2025",
    title: "Black Dots in the Eye: Causes, Symptoms, and Treatment Options",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/12/eye-health-1-400x400.png",
    authorName: "Dr. Sambavi A",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/11/Dr-Sambavi-Erode-323x400.jpg",
    description: "Seeing a black dot in the eye can be concerning, especially when it appears suddenly...",
    link: "https://www.dragarwal.com/blog/all-about-eye-health/black-dots-in-eye-causes-symptoms-treatment/"
  },
  {
    id: 2,
    date: "Friday, 21 Nov 2025",
    title: "High Myopia: Understanding Severe Nearsightedness and Its Impact",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/glasses-eye-exam-chart-test-eyesight-accuracy-reading-400x267.jpg",
    authorName: "Dr. Sambavi A",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/11/Dr-Sambavi-Erode-323x400.jpg",
    description: "The significance of clear vision lies in the sharpness of light on the retina. In...",
    link: "https://www.dragarwal.com/blog/high-myopia-severe-nearsightedness-impact/"
  },
  {
    id: 3,
    date: "Friday, 21 Nov 2025",
    title: "Myopia, Hypermetropia, and Presbyopia: Understanding the Key Differences",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/01c8b8d8-2d91-4388-a62a-f99acc19b2c7-400x313.jpg",
    authorName: "Dr. Sambavi A",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/11/Dr-Sambavi-Erode-323x400.jpg",
    description: "The clarity of vision is determined by the way in which the light falls on...",
    link: "https://www.dragarwal.com/blog/all-about-eye-health/myopia-hypermetropia-presbyopia-differences/"
  },
  {
    id: 4,
    date: "Wednesday, 19 Nov 2025",
    title: "Understanding Aniseikonia: Causes and Symptoms",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/blg-6-400x266.png",
    authorName: "Dr. Sambavi A",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/11/Dr-Sambavi-Erode-323x400.jpg",
    description: "The eyes are used to create a complete and balanced image in vision. When this...",
    link: "https://www.dragarwal.com/blog/eye-wellness/aniseikonia-causes-symptoms/"
  },
  {
    id: 5,
    date: "Wednesday, 19 Nov 2025",
    title: "Understanding 6/12 Vision: Causes, Correction Methods, and How to Improve It",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/ophthalmologist-doctor-consulting-patient-1-400x267.jpg",
    authorName: "Dr. Sambavi A",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/11/Dr-Sambavi-Erode-323x400.jpg",
    description: "Your eyesight plays a crucial role in how you interact with the world around you....",
    link: "https://www.dragarwal.com/blog/all-about-eye-health/understanding-6-12-vision-causes-correction-improvement/"
  },
  {
    id: 6,
    date: "Tuesday, 18 Nov 2025",
    title: "Understanding 6/9 Vision: What You Need to Know About Eye Health",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/doctor-testing-patient-eyesight-6-400x266.jpg",
    authorName: "Dr. Sambavi A",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/11/Dr-Sambavi-Erode-323x400.jpg",
    description: "When it comes to eyesight, clarity and focus are often measured using the Snellen chart,...",
    link: "https://www.dragarwal.com/blog/all-about-eye-health/understanding-6-9-vision-eye-health/"
  },
  {
    id: 7,
    date: "Tuesday, 18 Nov 2025",
    title: "Gonioscopy: What It Is, Procedure, Types & Benefits for Eye Health",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/blg-5-3-400x272.png",
    authorName: "Dr. Sambavi A",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2022/11/Dr-Sambavi-Erode-323x400.jpg",
    description: "Gonioscopy is a specialised eye examination used to assess the internal drainage system of the...",
    link: "https://www.dragarwal.com/blog/all-about-glaucoma/gonioscopy-procedure-types-benefits-eye-health/"
  },
  {
    id: 8,
    date: "Monday, 17 Nov 2025",
    title: "Eye Color Vision Test: Procedure, Results & Importance Explained",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/health-kid-eye-care-examination-with-ophthalmoscope-retina-assessment-ocular-wellness-pediatric-experience-laser-girl-patient-with-medical-instrument-glaucoma-exam-vision-test-400x211.jpg",
    authorName: "Home",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/03/Doctors-Placeholder.jpg",
    description: "Accurately seeing colors plays an essential role in daily life, from reading signs to performing...",
    link: "https://www.dragarwal.com/blog/eye-wellness/eye-color-vision-test-procedure-results-importance/"
  },
  {
    id: 9,
    date: "Monday, 17 Nov 2025",
    title: "Progressive Lenses: What They Are and How They Improve Your Vision",
    image: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2025/11/blg-5-1-400x271.png",
    authorName: "Home",
    authorImage: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/03/Doctors-Placeholder.jpg",
    description: "Introduction: Why Progressive Lenses Matter for Clear Vision As people age, the eye’s natural lens...",
    link: "https://www.dragarwal.com/blog/eye-wellness/progressive-lenses-improve-vision/"
  }
];

const BlogSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 992) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < blogData.length - itemsToShow) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(blogData.length - itemsToShow); // Loop to end
    }
  };

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="secondary-heading">Find Your Eye Remedies Through Our Blogs</h2>
        
        <div className="blog-slider-container">
          <div className="blog-slider-window">
            <div 
              className="blog-slider-track"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` 
              }}
            >
              {blogData.map((blog) => (
                <div 
                  key={blog.id} 
                  className="blog-slide-item"
                  style={{ flex: `0 0 ${100 / itemsToShow}%` }}
                >
                  <div className="blog-card">
                    <div className="blog-card-header">
                      <a href="/blogs">
                        <img src={blog.image} alt={blog.title} className="blog-img" />
                      </a>
                    </div>
                    <div className="blog-card-body">
                      <div className="blog-date">{blog.date}</div>
                      <h4 className="blog-title">{blog.title}</h4>
                      
                      <a href="/blogs" className="blog-author">
                        <img src={blog.authorImage} alt={blog.authorName} />
                        <h5>{blog.authorName}</h5>
                      </a>
                      
                      <div className="blog-description">
                        <p>{blog.description}</p>
                      </div>
                    </div>
                    <div className="blog-card-footer">
                      <a href="/blogs">read full article</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="blog-nav prev" onClick={prevSlide}>‹</button>
          <button className="blog-nav next" onClick={nextSlide}>›</button>
        </div>

        <div className="blog-explore-btn-container">
          <a href="/blogs" className="primary-btn">Explore More Blogs</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
