import React from 'react'
import Movie1 from '../assets/movie1.jpg'
import Movie2 from '../assets/movie2.jpg'
import Movie3 from '../assets/movie3.jpg'
import Movie4 from '../assets/movie4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


const movies = [
    {id: 1, image: Movie1, name: 'The Cloud Movie', year: 2012},
    {id: 2, image: Movie2, name: 'The Cloud Movie', year: 2012},
    {id: 3, image: Movie3, name: 'The Cloud Movie', year: 2012},
    {id: 4, image: Movie4, name: 'The Cloud Movie', year: 2012},
    {id: 4, image: Movie1, name: 'The Cloud Movie', year: 2012},
    {id: 4, image: Movie3, name: 'The Cloud Movie', year: 2012},
    {id: 4, image: Movie4, name: 'The Cloud Movie', year: 2012}, 
]


const ListMovie = () => {
  return (
    <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        {movies.map(movie => (
            <SwiperSlide className='h-[240px] w-[164px]'>
                <img src={movie.image} alt="" className='h-full w-full object-cover'/>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default ListMovie