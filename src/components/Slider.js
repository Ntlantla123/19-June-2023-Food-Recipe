import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';




function Slider() {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
    spaceBetween={50}
    effect="fade"
    slidesPerView={2}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src="images/food1.jpg" alt=""style={{width:"100%",height:"100vh",}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/food2.webp" alt=""style={{width:"100%",height:"100vh",}} />
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/food3.jpg" alt=""style={{width:"100%",height:"100vh",}}/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="images/food4.jpg" alt=""style={{width:"100%",height:"100vh",}}/>
      </SwiperSlide>
    </Swiper>
  )
}

export default Slider