import React, { useState } from 'react'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import avatar1 from '../../../assets/avatar1.jpg'
import avatar2 from '../../../assets/avatar2.jpg'
import avatar3 from '../../../assets/avatar3.jpg'
import avatar4 from '../../../assets/avatar4.jpg' 



const Testimonial = () => {

  const [teamMember] = useState([
    {
      id: 1,
      avatar: avatar1,
      name: "Lavesh Kumbhalkar",
      designation: "Senior Software Developer",
      review: "I loved his passion toward code. He is really good teammate as well as solution finder. I love his energy regarding work"
    },
    {
      id: 2,
      avatar: avatar2,
      name: 'Aditya Kale',
      designation:" Senior Software Developer",
      review: 'Sonic the Hedgehog is a 2006 platform game developed by Sonic Team and published by Sega. It was produced in commemoration'
    },
    {
      id: 3,
      avatar: avatar3,
      name: 'Aditya Kale',
      designation:" Senior Software Developer",
      review: 'Sonic the Hedgehog is a 2006 platform game developed by Sonic Team and published by Sega. It was produced in commemoration'
    },
    {
      id: 4,
      avatar: avatar4,
      name: 'Aditya Kale',
      designation:" Senior Software Developer",
      review: 'Sonic the Hedgehog is a 2006 platform game developed by Sonic Team and published by Sega. It was produced in commemoration'
    },

  ])

  return (
      <section id="testimonial">
        <h5>Review</h5>
        <h2>Testimonials</h2>

        <Swiper className="container testimonial-container"
              modules={[Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{ clickable: true }}>
          {teamMember.map(({avatar,designation, name, review}, index) => {
            return(
 
              <SwiperSlide key = {index} className="testimonial"> 
              <div className="member-avatar">
                <img src={avatar} alt="team-member" />
              </div>
              <h4>{name}</h4>
              <h5>{designation}</h5>
                <small className = "member-review">{review}</small>
           </SwiperSlide>
            )
          })}
        </Swiper>
      </section>
  )
}

export default Testimonial