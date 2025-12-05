import React from 'react';

const footerData = [
  {
    title: "Eye Hospitals - State & UT",
    links: [
      { name: "Tamil Nadu", url: "#" },
      { name: "Karnataka", url: "#" },
      { name: "Maharashtra", url: "#" },
      { name: "Kerala", url: "#" },
      { name: "West Bengal", url: "#" },
      { name: "Odisha", url: "#" },
      { name: "Andhra Pradesh", url: "#" },
      { name: "Telangana", url: "#" },
      { name: "Puducherry", url: "#" },
      { name: "Gujarat", url: "#" },
      { name: "Rajasthan", url: "#" },
      { name: "Madhya Pradesh", url: "#" },
      { name: "Punjab", url: "#" },
      { name: "Jammu & Kashmir", url: "#" },
      { name: "All Eye Hospitals", url: "#" }
    ]
  },
  {
    title: "Eye Hospitals - City",
    links: [
      { name: "Chennai", url: "#" },
      { name: "Bangalore", url: "#" },
      { name: "Mumbai", url: "#" },
      { name: "Pune", url: "#" },
      { name: "Hyderabad", url: "#" },
      { name: "Coimbatore", url: "#" },
      { name: "Bhubaneswar", url: "#" },
      { name: "Kolkata", url: "#" },
      { name: "Indore", url: "#" },
      { name: "Cuttack", url: "#" },
      { name: "Ahmedabad", url: "#" },
      { name: "Accra", url: "#" },
      { name: "Nairobi", url: "#" }
    ]
  },
  {
    title: "Diseases & Conditions",
    links: [
      { name: "Cataract", url: "#" },
      { name: "Glaucoma", url: "#" },
      { name: "Squint", url: "#" },
      { name: "Diabetic Retinopathy", url: "#" },
      { name: "Retinal Detachment", url: "#" },
      { name: "Retinopathy Prematurity", url: "#" },
      { name: "Macular Edema", url: "#" },
      { name: "Traumatic Cataract", url: "#" },
      { name: "Macular Hole", url: "#" },
      { name: "Posterior Subcapsular Cataract", url: "#" },
      { name: "Rosette Cataract", url: "#" },
      { name: "Congenital Glaucoma", url: "#" },
      { name: "All Diseases & Conditions", url: "#" }
    ]
  },
  {
    title: "Eye Anatomy & Treatments",
    links: [
      { name: "Retina", url: "#" },
      { name: "Uvea", url: "#" },
      { name: "Cornea", url: "#" },
      { name: "Orbit", url: "#" },
      { name: "Photocoagulation", url: "#" },
      { name: "Vitrectomy", url: "#" },
      { name: "Anti Vegf", url: "#" },
      { name: "Dry eyes", url: "#" },
      { name: "Eye Test", url: "#" },
      { name: "PDEK", url: "#" },
      { name: "Refractive Surgery", url: "#" },
      { name: "Paediatric Ophthalmology", url: "#" },
      { name: "All Eye treatments", url: "#" }
    ]
  },
  {
    title: "Blogs Categories",
    links: [
      { name: "Eye Care During Corona", url: "#" },
      { name: "Lifestyle", url: "#" },
      { name: "General Ophthalmology", url: "#" },
      { name: "Child Eye Care", url: "#" },
      { name: "Contact Lens and Low Vision", url: "#" },
      { name: "All About Glaucoma", url: "#" },
      { name: "All About Lasik", url: "#" },
      { name: "All About Cataract", url: "#" },
      { name: "All about Cornea", url: "#" },
      { name: "All About Retina", url: "#" },
      { name: "All About Neuro Ophthalmology", url: "#" },
      { name: "All About Oculoplasty", url: "#" },
      { name: "All Blogs", url: "#" }
    ]
  }
];

const Footermini = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-row">
            {footerData.map((column, index) => (
              <div key={index} className="footer-col">
                <h4 className="footer-heading">{column.title}</h4>
                <ul className="footer-links">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footermini;
