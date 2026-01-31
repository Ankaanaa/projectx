'use client'

import 'swiper/css'
import { Autoplay, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './running.scss'

const RunningLine = () => {
  return (
    <div className='swiper__body'>
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView='auto'
        spaceBetween={500}
        loop={true}
        speed={9000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
          sticky: false,
        }}
        allowTouchMove={false}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SwiperSlide key={i} style={{ width: 'auto' }}>
            A car can be rented by anyone over 21 years of age who has had a
            driver's license for at least 1 year.
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default RunningLine
