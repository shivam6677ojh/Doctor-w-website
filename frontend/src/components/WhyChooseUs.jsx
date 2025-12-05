import React from 'react'

const reasons = [
  {
    id: 1,
    img: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/01/number1.png",
    title: "TEAM OF OVER 500 HIGHLY EXPERIENCED DOCTORS",
    text: "When you visit any of our hospitals, you have the collective experience of over 400+ doctors backing your treatments."
  },
  {
    id: 2,
    img: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/01/number2.png",
    title: "ADVANCED TECHNOLOGY & TECHNICAL TEAM",
    text: "We are the pioneers when it comes to introducing the latest in Ophthalmic medical technology in India & Africa."
  },
  {
    id: 3,
    img: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/01/number3.png",
    title: "PERSONALIZED CARE",
    text: "One thing that has not changed in the last 60 years: individual, personalized care for everyone."
  },
  {
    id: 4,
    img: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2020/12/number4.png",
    title: "THOUGHT LEADERSHIP IN OPHTHALMOLOGY",
    text: "With numerous inventions and surgical techniques developed in-house, we are active contributors to the field of Ophthalmology."
  },
  {
    id: 5,
    img: "https://agarwals-219c6.kxcdn.com/wp-content/uploads/2021/01/number5.png",
    title: "UNMATCHED HOSPITAL EXPERIENCE",
    text: "With well-trained and friendly staff members, smooth and seamless operations and strict adherence to COVID protocols, we aim to provide an unmatched hospital experience. Drop in and see the difference."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">
        <h2 className="why-heading">Why Dr. Agarwals</h2>
        <div className="why-grid">
          {reasons.map((item) => (
            <div key={item.id} className="why-col">
              <div className="why-img">
                <img src={item.img} alt={`Reason ${item.id}`} />
              </div>
              <div className="why-txt">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
