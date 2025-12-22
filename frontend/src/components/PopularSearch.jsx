import React from 'react'
import './PopularSearch.css'

const SECTIONS = [
  {
    title: 'Best Top Eye Hospitals',
    links: [
      ['Eye Hospitals in Chennai','https://www.dragarwal.com/eye-hospitals/chennai/'],
      ['Eye Hospitals in Bangalore','https://www.dragarwal.com/eye-hospitals/bangalore/'],
      ['Eye Hospitals in Mumbai','https://www.dragarwal.com/eye-hospitals/mumbai/'],
      ['Eye Hospitals in Pune','https://www.dragarwal.com/eye-hospitals/pune/'],
      ['Eye Hospitals in Hyderabad','https://www.dragarwal.com/eye-hospitals/hyderabad/'],
      ['Eye Hospitals in Coimbatore','https://www.dragarwal.com/eye-hospitals/coimbatore/'],
      ['Eye Hospitals in Bhubaneswar','https://www.dragarwal.com/eye-hospitals/bhubaneswar/'],
      ['Eye Hospitals in Kolkata','https://www.dragarwal.com/eye-hospitals/kolkata/'],
      ['Eye Hospitals in Indore','https://www.dragarwal.com/eye-hospital/indore-old-palasia/'],
      ['Eye Hospitals in Cuttack','https://www.dragarwal.com/eye-hospitals/cuttack/'],
      ['Eye Hospitals in Ahmedabad','https://www.dragarwal.com/eye-hospitals/ahmedabad/'],
      ['Eye Hospitals in Accra','https://www.dragarwal.com/eye-hospitals/accra/'],
      ['Eye Hospitals in Nairobi','https://www.dragarwal.com/eye-hospitals/nairobi/'],
    ],
  },
  {
    title: 'Best Ophthalmologist in Top Cities',
    links: [
      ['Ophthalmologist in Chennai','https://www.dragarwal.com/eye-doctors/chennai/'],
      ['Ophthalmologist in Mumbai','https://www.dragarwal.com/eye-doctors/mumbai/'],
      ['Ophthalmologist in Pune','https://www.dragarwal.com/eye-doctors/pune/'],
      ['Ophthalmologist in Bangalore','https://www.dragarwal.com/eye-doctors/bangalore/'],
      ['Ophthalmologist in Kolkata','https://www.dragarwal.com/eye-doctors/kolkata/'],
      ['Ophthalmologist in Hyderabad','https://www.dragarwal.com/eye-doctors/hyderabad/'],
      ['Ophthalmologist in Chandigarh','https://www.dragarwal.com/eye-doctors/chandigarh/'],
      ['Ophthalmologist in Ahmedabad','https://www.dragarwal.com/eye-doctors/ahmedabad/'],
      ['Ophthalmologist in Lucknow','https://www.dragarwal.com/eye-doctors/Lucknow/'],
      ['Ophthalmologist in Jaipur','https://www.dragarwal.com/eye-doctors/jaipur/'],
      ['Ophthalmologist in Coimbatore','https://www.dragarwal.com/eye-doctors/coimbatore/'],
      ['Ophthalmologist in New Delhi','https://www.dragarwal.com/eye-doctors/new-delhi/'],
    ],
  },
  {
    title: 'Cataract Surgery in Top Cities',
    links: [
      ['Cataract Surgery in Chennai','https://www.dragarwal.com/cataract-surgery/chennai/'],
      ['Cataract Surgery in Mumbai','https://www.dragarwal.com/cataract-surgery/mumbai/'],
      ['Cataract Surgery in Pune','https://www.dragarwal.com/cataract-surgery/pune/'],
      ['Cataract Surgery in Bangalore','https://www.dragarwal.com/cataract-surgery/bangalore/'],
      ['Cataract Surgery in Kolkata','https://www.dragarwal.com/cataract-surgery/kolkata/'],
      ['Cataract Surgery in Hyderabad','https://www.dragarwal.com/cataract-surgery/hyderabad/'],
      ['Cataract Surgery in Chandigarh','https://www.dragarwal.com/cataract-surgery/chandigarh/'],
      ['Cataract Surgery in Ahmedabad','https://www.dragarwal.com/cataract-surgery/ahmedabad/'],
      ['Cataract Surgery in Lucknow','https://www.dragarwal.com/cataract-surgery/lucknow/'],
      ['Cataract Surgery in Jaipur','https://www.dragarwal.com/cataract-surgery/jaipur/'],
      ['Cataract Surgery in Coimbatore','https://www.dragarwal.com/cataract-surgery/coimbatore/'],
      ['Cataract Surgery in New Delhi','https://www.dragarwal.com/cataract-surgery/new-delhi/'],
    ],
  },
  {
    title: 'LASIK Surgery in Top Cities',
    links: [
      ['LASIK Surgery in Chennai','https://www.dragarwal.com/lasik-surgery/chennai'],
      ['LASIK Surgery in Mumbai','https://www.dragarwal.com/lasik-surgery/mumbai'],
      ['LASIK Surgery in Pune','https://www.dragarwal.com/lasik-surgery/pune'],
      ['LASIK Surgery in Bangalore','https://www.dragarwal.com/lasik-surgery/bangalore'],
      ['LASIK Surgery in Kolkata','https://www.dragarwal.com/lasik-surgery/kolkata'],
      ['LASIK Surgery in Hyderabad','https://www.dragarwal.com/lasik-surgery/hyderabad'],
      ['LASIK Surgery in Chandigarh','https://www.dragarwal.com/lasik-surgery/chandigarh'],
      ['LASIK Surgery in Ahmedabad','https://www.dragarwal.com/lasik-surgery/ahmedabad'],
      ['LASIK Surgery in Lucknow','https://www.dragarwal.com/lasik-surgery/lucknow'],
      ['LASIK Surgery in Jaipur','https://www.dragarwal.com/lasik-surgery/jaipur'],
      ['LASIK Surgery in Coimbatore','https://www.dragarwal.com/lasik-surgery/coimbatore'],
    ],
  },
  {
    title: 'Diseases & Treatment',
    links: [
      ['Cataracts','https://www.dragarwal.com/diseases-conditions/cataract/'],
      ['Glaucoma','https://www.dragarwal.com/diseases-conditions/glaucoma/'],
      ['Diabetic Retinopathy','https://www.dragarwal.com/diseases-conditions/diabetic-retinopathy/'],
      ['Myopia','https://www.dragarwal.com/diseases-conditions/myopia/'],
      ['Conjunctivitis','https://www.dragarwal.com/diseases-conditions/allergic-conjunctivitis/'],
      ['Keratoconus','https://www.dragarwal.com/diseases-conditions/keratoconus/'],
      ['Retinal Detachment','https://www.dragarwal.com/diseases-conditions/retinal-detachment/'],
      ['Lasik Surgery','https://www.dragarwal.com/eye-treatment/lasik/'],
      ['Contoura Lasik','https://www.dragarwal.com/eye-treatment/refractive-surgery/contoura-lasik/'],
      ['Refractive Surgery','https://www.dragarwal.com/eye-treatment/refractive-surgery/'],
      ['Laser Cataract Surgery','https://www.dragarwal.com/eye-treatment/laser-cataract-surgery/'],
      ['Dry Eye Treatment','https://www.dragarwal.com/eye-treatment/dry-eyes/'],
      ['Cornea Transplantation','https://www.dragarwal.com/eye-treatment/cornea-transplantation/'],
      ['Vitrectomy','https://www.dragarwal.com/eye-treatment/vitrectomy/'],
    ],
  },
]

export default function PopularSearch() {
  return (
    <section className="popular-search">
      {SECTIONS.map((sec) => (
        <div key={sec.title} className="popular-group">
          <h4>{sec.title}</h4>
          <div className="popular-links">
            {sec.links.map(([label, href], idx) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" className="popular-link">
                {label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
