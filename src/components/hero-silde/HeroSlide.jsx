import React, { useEffect, useState } from 'react';

import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import tmdbApi, { category, movieType } from '../../Api/tmdbApi';
import apiConfig from '../../Api/apiConfig';

import './hero-slide.scss';

const HeroSlide = () => {

  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1}
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {params});
        setMovieItems(response.result.slice(1,4));
        console.log(response);
      }
      catch{
        console.log('Error');
      }
    }
    getMovies();
  }, []);

  return (
    <div className='hero-slide'>
      <Swiper
          modules = {[Autoplay]}
          grabCursor={true}
          spaceBetween={0}
          slidesPerView={1}>
              {
                movieItems.map((item, i) =>(
                  <SwiperSlide key={i}>
                      {({ isActive }) => (
                        <img src={apiConfig.originalImage(item.backdrop_path)} />
                      )}
                  </SwiperSlide>
                ))
              }
      </Swiper>
      </div>
  )
}

export default HeroSlide;