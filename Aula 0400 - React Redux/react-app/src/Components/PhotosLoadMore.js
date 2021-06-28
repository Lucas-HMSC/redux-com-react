import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos } from '../store/photos';

import Loading from './Helper/Loading';

import styles from './PhotosLoadMore.module.css';

const PhotosLoadMore = () => {
  const { pages, infinite, loading } = useSelector(state => state.photos);
  const dispatch = useDispatch();
  
  function handleClick() {
    dispatch(loadNewPhotos(pages + 1));
  }
  
  if (loading) return <Loading />
  if (!infinite) return null; 

  return (
    <button 
      className={styles.button}
      onClick={handleClick}
    >
      +
    </button>
  )
}

export default PhotosLoadMore
