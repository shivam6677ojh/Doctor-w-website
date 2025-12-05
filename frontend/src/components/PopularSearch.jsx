import React from 'react';

const cataractCities = [
  { name: "Cataract Surgery in Chennai", url: "https://www.dragarwal.com/cataract-surgery/chennai" },
  { name: "Cataract Surgery in Mumbai", url: "https://www.dragarwal.com/cataract-surgery/mumbai/" },
  { name: "Cataract Surgery in Pune", url: "https://www.dragarwal.com/cataract-surgery/pune/" },
  { name: "Cataract Surgery in Bangalore", url: "https://www.dragarwal.com/cataract-surgery/bangalore/" },
  { name: "Cataract Surgery in Kolkata", url: "https://www.dragarwal.com/cataract-surgery/kolkata/" },
  { name: "Cataract Surgery in Hyderabad", url: "https://www.dragarwal.com/cataract-surgery/hyderabad/" },
  { name: "Cataract Surgery in Chandigarh", url: "https://www.dragarwal.com/cataract-surgery/chandigarh/" },
  { name: "Cataract Surgery in Ahmedabad", url: "https://www.dragarwal.com/cataract-surgery/ahmedabad/" },
  { name: "Cataract Surgery in Lucknow", url: "https://www.dragarwal.com/cataract-surgery/lucknow/" },
  { name: "Cataract Surgery in Jaipur", url: "https://www.dragarwal.com/cataract-surgery/jaipur/" },
  { name: "Cataract Surgery in Coimbatore", url: "https://www.dragarwal.com/cataract-surgery/coimbatore/" },
  { name: "Cataract Surgery in New Delhi", url: "https://www.dragarwal.com/cataract-surgery/new-delhi" }
];

const lasikCities = [
  { name: "Lasik Surgery in Chennai", url: "https://www.dragarwal.com/chennai/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Mumbai", url: "https://www.dragarwal.com/mumbai/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Pune", url: "https://www.dragarwal.com/pune/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Bangalore", url: "https://www.dragarwal.com/bangalore/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Kolkata", url: "https://www.dragarwal.com/kolkata/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Hyderabad", url: "https://www.dragarwal.com/hyderabad/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Chandigarh", url: "https://www.dragarwal.com/chandigarh/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Ahmedabad", url: "https://www.dragarwal.com/ahmedabad/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Lucknow", url: "https://www.dragarwal.com/lucknow/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Jaipur", url: "https://www.dragarwal.com/jaipur/lasik-eye-surgery/" },
  { name: "Lasik Surgery in Coimbatore", url: "https://www.dragarwal.com/coimbatore/lasik-eye-surgery/" }
];

const popularSearches = [
  { name: "Squint", url: "https://www.dragarwal.com/diseases-conditions/squint/" },
  { name: "Lasik Surgery", url: "https://www.dragarwal.com/eye-treatment/lasik/" },
  { name: "Posterior Subcapsular Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/posterior-subcapsular-cataract/" },
  { name: "Cortical Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/cortical-cataract/" },
  { name: "Uveitis", url: "https://www.dragarwal.com/diseases-conditions/uveitis/" },
  { name: "Congenital Glaucoma", url: "https://www.dragarwal.com/diseases-conditions/glaucoma/congenital-glaucoma/" },
  { name: "Rosette Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/rosette-cataract/" },
  { name: "Ophthalmologist", url: "https://www.dragarwal.com/doctors/" },
  { name: "Scleral Buckling", url: "https://www.dragarwal.com/eye-treatment/scleral-buckle/" },
  { name: "Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/" },
  { name: "Subcapsular Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/posterior-subcapsular-cataract/" },
  { name: "Chennai Eye Hospital", url: "https://www.dragarwal.com/eye-hospitals/chennai/" },
  { name: "Cataract Surgery Aftercare", url: "https://www.dragarwal.com/blog/all-about-cataract/cataract-surgery-everything-you-need-to-know/" },
  { name: "Paralytic Squint", url: "https://www.dragarwal.com/diseases-conditions/squint/paralytic-squint/" },
  { name: "Nuclear Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/nuclear-cataract/" },
  { name: "Retinal Hole", url: "https://www.dragarwal.com/blog/all-about-retina/retinal-hole-and-its-treatment-options/" },
  { name: "Pigmentary Glaucoma", url: "https://www.dragarwal.com/diseases-conditions/glaucoma/" },
  { name: "Cataract Surgery", url: "https://www.dragarwal.com/eye-treatment/cataract-surgery/" },
  { name: "Bladeless Lasik", url: "https://www.dragarwal.com/eye-treatment/lasik/" },
  { name: "Occuloplasty", url: "https://www.dragarwal.com/eye-treatment/oculoplasty/" },
  { name: "Keratitis", url: "https://www.dragarwal.com/diseases-conditions/corneal-ulcer-keratitis/" },
  { name: "Refractive Surgery", url: "https://www.dragarwal.com/eye-treatment/refractive-surgery/" },
  { name: "Posterior Capsular Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/posterior-subcapsular-cataract/" },
  { name: "Dr AkshayNair", url: "https://www.dragarwal.com/doctor/akshay-nair/" },
  { name: "Trauma Cataract", url: "https://www.dragarwal.com/diseases-conditions/cataract/traumatic-cataract/" },
  { name: "Non-proliferative Diabetic Retinopathy Treatment", url: "https://www.dragarwal.com/diseases-conditions/diabetic-retinopathy/non-proliferative-diabetic-retinopathy/" },
  { name: "Fellowship in Optometry", url: "https://www.dragarwal.com/courses/optometry-college/" },
  { name: "RelexSmile Surgery", url: "https://www.dragarwal.com/eye-treatment/relex-smile/" },
  { name: "How Safe is Lasik", url: "https://www.dragarwal.com/blog/all-about-lasik/is-lasik-safe/" },
  { name: "Eye Hospital in Ahmedabad", url: "https://www.dragarwal.com/eye-hospitals/ahmedabad/" },
  { name: "Eye Hospital Coimbatore", url: "https://www.dragarwal.com/eye-hospitals/coimbatore/" },
  { name: "Photocoagulation", url: "https://www.dragarwal.com/eye-treatment/retinal-laser-photocoagulation/" }
];

const LinkGroup = ({ title, links }) => (
  <div className="search-group">
    <h4>{title}</h4>
    <div className="generic_events">
      <p>
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a href={link.url}>{link.name}</a>
            {index < links.length - 1 && <span className="separator"> | </span>}
          </React.Fragment>
        ))}
      </p>
    </div>
  </div>
);

const PopularSearch = () => {
  return (
    <section className="popular-search-section">
      <div className="container">
        <div className="popular-search">
          <LinkGroup title="Cataract Surgery in Top cities" links={cataractCities} />
          <LinkGroup title="LASIK Surgery in Top Cities" links={lasikCities} />
          <LinkGroup title="Popular Searches" links={popularSearches} />
        </div>
      </div>
    </section>
  );
};

export default PopularSearch;
