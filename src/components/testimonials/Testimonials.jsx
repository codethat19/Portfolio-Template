import React from 'react'
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Sow",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },
  {
    avatar: AVTR2,
    name: "Jonas Smith",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },
  {
    avatar: AVTR3,
    name: "Lex Wayne",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },
  {
    avatar: AVTR4,
    name: "Lisa Luthor",
    review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus dolorum, sequi, eos quasi dolore magnam cumque, architecto quia repellat eligendi possimus non. Id voluptas sit tempora fugit explicabo distinctio impedit."
  },  
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}>
      {/* // scrollbar={{ draggable: true }} */}
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={name} />           
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials

