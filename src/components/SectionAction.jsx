import React, {useRef}   from 'react'
import Movie1 from '../assets/movie1.jpg'
import Movie2 from '../assets/movie2.jpg'
import Movie3 from '../assets/movie3.jpg'
import Movie4 from '../assets/movie4.jpg'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

//SwiperJS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Navigation} from 'swiper'
SwiperCore.use([Navigation])

const movies = [
    {id: 1, image: Movie1, name: 'The Cloud Movie', year: 2012, featured: false},
    {id: 2, image: Movie2, name: 'The Cloud Movie', year: 2018, featured: false},
    {id: 3, image: Movie3, name: 'The Cloud Movie', year: 2012, featured: true},
    {id: 4, image: Movie4, name: 'The Cloud Movie', year: 2014, featured: false},
    {id: 4, image: Movie1, name: 'The Cloud Movie', year: 2012, featured: false},
    {id: 4, image: Movie3, name: 'The Cloud Movie', year: 2011, featured: false},
    {id: 4, image: Movie4, name: 'The Cloud Movie', year: 2022, featured: false}, 
]


const SectionAction = () => {

    const prevRefAct = useRef(null);
    const nextRefAct = useRef(null);
        
    return (
        <section className='bg-[#131722] py-10'>
            <div className='flex flex-col sm:w-[80%] w-[90%] mx-auto'>
                <div className='flex flex-col-reverse sm:flex-row w-full items-center gap-10'>
                    <div className='sm:w-[70%] w-full'>
                        <div className='flex space-x-2 text-xs items-center mb-10'>
                            <p className='text-primary font-semibold'>Today</p>
                            <span className='text-gray-400'>/</span>
                            <p className='text-gray-400'>This week</p>
                            <span className='text-gray-400'>/</span>
                            <p className='text-gray-400'>Last 30 days</p>
                        </div>
                        <Swiper

                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRefAct.current;
                                swiper.params.navigation.nextEl = nextRefAct.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            loop
                            spaceBetween={10}
                            slidesPerView={"auto"}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >   
                            {movies.map(movie => (
                                <SwiperSlide className='w-[164px] relative'>
                                    <img src={movie.image} alt="" className='h-[240px] w-full object-cover'/>
                                    {movie.featured && <p className='absolute top-0 left-[30%] text-xs text-white bg-primary p-1 px-2 rounded'>Featured</p>}
                                    <div className='flex flex-col mt-2'>
                                        <p className='text-xs text-gray-600'>Action, {movie.year}</p>
                                        <h4 className='font-semibold text-white text-sm mt-1'>{movie.name}</h4>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className='sm:w-[30%] w-full flex flex-col'>
                        <div className='w-10 h-[1px] bg-gray-600'></div>
                        <h2 className='mt-14 text-3xl text-white font-semibold'>Action & Drama Movies</h2>
                        <div className='flex items-center space-x-4 mt-6'>
                            <div 
                                className='w-10 h-10 rounded-full flex items-center justify-center border border-gray-600'
                                ref={prevRefAct}
                            >
                                <MdKeyboardArrowLeft className='text-gray-600 text-xl' />
                            </div>
                            <div 
                                className='w-10 h-10 rounded-full flex items-center justify-center border border-gray-600'
                                ref={nextRefAct}
                            >
                                <MdKeyboardArrowRight className='text-gray-600 text-xl' />
                            </div>
                        </div>
                        <div className='w-[90%] h-[1px] bg-gray-600 mt-[2.7rem]'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionAction