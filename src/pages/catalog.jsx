import React, { useEffect, useState } from 'react';

import {useParams} from 'react-router';

import PageHeader from '../components/page-header/PageHeader';

import {category as cate} from '../Api/tmdbApi';
import MovieGird from '../components/movie-grid/MovieGrid';
const Catalog = () => {

  const {category} = useParams();
  const [currCate, setCurrCate] = useState(category)

  useEffect(() => {
    console.log("first")
    setCurrCate(category === cate.movie ? 'Movie' : 'TV Series')
  }, [category])
  

  return (
    <>
        <PageHeader>
            {currCate}
        </PageHeader>
        <div className="container">
          <div className="section md-3">
            <MovieGird category={category}/>
          </div>
        </div>
    </>
  );
}

export default Catalog;
